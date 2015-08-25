/* 
 * monoco
 * Design.Create.Compose
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks: ['jshint', 'test'],
                options: {
                    spawn: false
                }
            }
        },
        clean: ['build/*.js', 'build/*.json', 'build/system'],
        jshint: {
            files: [
                'src/*.js',
                'build/system/*.js',
                'test/*.js'
            ],
            options: {
                jshintrc: true
            }
        },
        jsbeautifier: {
            files: ['build/system/*.js', 'build/system/*.json']
        },
        yuidoc: {
            monoco: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    linkNatives: 'true',
                    paths: ['src', 'build/system'],
                    themedir: 'node_modules/yuidoc-lucid-theme',
                    helpers: ['node_modules/yuidoc-lucid-theme/helpers/helpers.js'],
                    outdir: 'doc'
                }
            }
        },
        jasmine_nodejs: {
            options: {
                specNameSuffix: "spec.js",
                helperNameSuffix: "helper.js",
                useHelpers: false,
                stopOnFailure: false,
                reporters: {
                    console: {
                        colors: true,
                        cleanStack: 1,
                        verbosity: 4,
                        listStyle: "indent",
                        activity: false
                    },
                },
                customReporters: []
            },
            monoco: {
                specs: [
                    "test/module/**",
                    "test/monoco/**"
                ]
            }
        },
        karma: {
            monoco: {
                configFile: 'karma.conf.js'
            }
        },
        browserify: {
            monocoDebug: {
                src: ['src/monoco.js'],
                dest: 'build/monoco.js',
                options: {
                    browserifyOptions: {
                        standalone: 'monoco',
                        debug: true
                    }
                }
            },
            monoco: {
                src: ['src/monoco.js'],
                dest: 'build/monoco-min.js',
                options: {
                    browserifyOptions: {
                        standalone: 'monoco'
                    }
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'build/<%= pkg.name %>-min.js': ['<%= browserify.monoco.dest %>']
                }
            }
        },
        concat: {
            systemInfos: {
                options: {
                    process: function (src, filepath) {
                        var result = '';

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        // ID & version
                        src = src.replace('{version}', grunt.file.readJSON('package.json').version).trim();
                        result = src.replace('{id}', generateId());

                        return result;
                    }
                },
                files: {
                    'build/monoco.json': ['src/template/banner/system.txt']
                }
            },
            systemBehaviors: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                            uuid = '',
                            behaviors = {};

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        if (filepath.indexOf('build') !== -1) {
                            grunt.option('behaviors', {});
                            result = src + '\n"behaviors" : {},';
                        } else {
                            behaviors = grunt.option('behaviors');
                            uuid = JSON.parse(src)._id;
                            if (typeof uuid === 'undefined') {
                                uuid = generateId();
                                src = src.replace('{', '{"_id":"' + uuid + '",');
                            }
                            behaviors[uuid] = JSON.parse(src);
                        }
                        return result;
                    }
                },
                files: {
                    'build/monoco.json': ['build/monoco.json', 'src/system/behaviors/*/*.json']
                }
            },
            systemSchemas: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                            uuid = '',
                            schemas = {};

                        if (filepath.indexOf('build') !== -1) {
                            grunt.option('schemas', {});
                            result = src + '\n"schemas" : {},';
                        } else {
                            uuid = JSON.parse(src)._id;
                            schemas = grunt.option('schemas');
                            schemas[uuid] = JSON.parse(src);
                        }
                        return result;
                    }
                },
                files: {
                    'build/monoco.json': ['build/monoco.json', 'src/system/schemas/*.json']
                }
            },
            systemTypes: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                            uuid = '',
                            types = {};

                        if (filepath.indexOf('build') !== -1) {
                            grunt.option('types', {});
                            result = src + '\n"types" : {},';
                        } else {
                            uuid = JSON.parse(src).name;
                            types = grunt.option('types');
                            types[uuid] = JSON.parse(src);
                        }
                        return result;
                    }
                },
                files: {
                    'build/monoco.json': ['build/monoco.json', 'src/system/types/*.json']
                }
            },
            systemComponents: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                            uuid = '',
                            collectionName = '',
                            components = {};

                        if (filepath.indexOf('build') !== -1) {
                            result = src + '\n"components" : {}\n}';
                            grunt.option('components', {});
                        } else {
                            components = grunt.option('components');

                            uuid = JSON.parse(src)._id;

                            collectionName = filepath.split('components/')[1];
                            collectionName = collectionName.split('/')[0];

                            src = src.replace('{version}', grunt.file.readJSON('package.json').version).trim();

                            if (typeof components[collectionName] === 'undefined') {
                                components[collectionName] = {};
                            }

                            components[collectionName][uuid] = JSON.parse(src);
                        }
                        return result;
                    }
                },
                files: {
                    'build/monoco.json': ['build/monoco.json', 'src/system/components/*/*.json']
                }
            },
            systemFill: {
                options: {
                    process: function (src, filepath) {
                        var system = {};

                        system = JSON.parse(src);
                        system.components = grunt.option('components');
                        system.schemas = grunt.option('schemas');
                        system.types = grunt.option('types');
                        system.behaviors = grunt.option('behaviors');
                        
                        // process addon in order to insert subsytem                 
                        system.components.MonocoSystem = {};

                        grunt.file.recurse('src/addons', loadSubSystem);

                        function loadSubSystem(abspath, rootdir, subdir, filename) {
                            if (filename.indexOf('.') !== 0) {
                                var subSystem = grunt.file.readJSON(abspath);

                                system.components.MonocoSystem[subSystem._id] = {
                                    "_id": subSystem._id,
                                    "name": subSystem.name,
                                    "version": subSystem.version,
                                    "description": subSystem.description,
                                    "subsystem": true,
                                    "master": false
                                };
                            }
                        }

                        return JSON.stringify(system);
                    }
                },
                files: {
                    'build/monoco.json': ['build/monoco.json']
                }
            },
            systemModule: {
                files: {
                    'build/system/system.js': ['src/template/banner/systemmodule.txt', 'build/monoco.json', 'src/template/footer/systemmodule.txt']
                }
            },
            licence: {
                src: ['src/template/banner/licence.txt', 'build/monoco-min.js'],
                dest: 'build/monoco-min.js'
            }
        },
        "merge-json": {
            monoco: {
                src: ["src/addons/*.json", "build/monoco.json"],
                dest: "build/monoco.json"
            }
        }

    });


    // default tasks
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-jasmine-nodejs');
    grunt.loadNpmTasks('grunt-merge-json');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-karma');


    // system JSON task
    grunt.registerTask('system-json', [
        'concat:systemInfos',
        'concat:systemBehaviors',
        'concat:systemSchemas',
        'concat:systemTypes',
        'concat:systemComponents',
        'concat:systemFill'
    ]);

    // system node task
    grunt.registerTask('system-js', [
        'concat:systemModule',
        'jsbeautifier'
    ]);

    // doc task
    grunt.registerTask('doc', [
        'yuidoc'
    ]);

    // test task
    grunt.registerTask('test', [
        'jasmine_nodejs:monoco'
    ]);

    // debug task
    grunt.registerTask('debug', [
        'system-json',
        'merge-json',
        'system-js',
        'jsbeautifier',
        'jshint',
        'test',
        'browserify:monocoDebug'
    ]);

    // build task
    grunt.registerTask('build', [
        'system-json',
        'merge-json',
        'system-js',
        'jsbeautifier',
        'jshint',
        'test',
        'browserify:monoco',
        'uglify',
        'concat:licence',
        'karma:monoco'
    ]);
};