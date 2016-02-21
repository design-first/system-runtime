/*
 * SyrupJS
 * The System Runtime Platform
 * https://syrupjs.github.io
 * @ecarriou
 *  
 * Copyright (c) 2016 Erwan Carriou
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE. 
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
            syrup: {
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
            syrup: {
                specs: [
                    "test/module/**",
                    "test/syrup/**"
                ]
            }
        },
        karma: {
            syrup: {
                configFile: 'karma.conf.js'
            }
        },
        browserify: {
            syrupDebug: {
                src: ['src/syrup.js'],
                dest: 'build/system-runtime.js',
                options: {
                    browserifyOptions: {
                        standalone: 'syrup',
                        debug: true
                    }
                }
            },
            syrup: {
                src: ['src/syrup.js'],
                dest: 'build/system-runtime.min.js',
                options: {
                    browserifyOptions: {
                        standalone: 'syrup'
                    }
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'build/<%= pkg.name %>.min.js': ['<%= browserify.syrup.dest %>']
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
                    'build/syrup.json': ['src/template/banner/system.txt']
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
                    'build/syrup.json': ['build/syrup.json', 'src/system/behaviors/*/*.json']
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
                    'build/syrup.json': ['build/syrup.json', 'src/system/schemas/*.json']
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
                    'build/syrup.json': ['build/syrup.json', 'src/system/types/*.json']
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
                    'build/syrup.json': ['build/syrup.json', 'src/system/components/*/*.json']
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
                        system.components.SyrupSystem = {};

                        grunt.file.recurse('src/addons', loadSubSystem);

                        function loadSubSystem(abspath, rootdir, subdir, filename) {
                            if (filename.indexOf('.') !== 0) {
                                var subSystem = grunt.file.readJSON(abspath);

                                system.components.SyrupSystem[subSystem._id] = {
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
                    'build/syrup.json': ['build/syrup.json']
                }
            },
            systemModule: {
                files: {
                    'build/system/system.js': ['src/template/banner/systemmodule.txt', 'build/syrup.json', 'src/template/footer/systemmodule.txt']
                }
            },
            licence: {
                src: ['src/template/banner/licence.txt', 'build/system-runtime.min.js'],
                dest: 'build/system-runtime.min.js'
            }
        },
        "merge-json": {
            syrup: {
                src: ["src/addons/*.json", "build/syrup.json"],
                dest: "build/syrup.json"
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
        'jasmine_nodejs:syrup'
    ]);

    // debug task
    grunt.registerTask('debug', [
        'system-json',
        'merge-json',
        'system-js',
        'jsbeautifier',
        'jshint',
        'test',
        'browserify:syrupDebug'
    ]);

    // build task
    grunt.registerTask('build', [
        'system-json',
        'merge-json',
        'system-js',
        'jsbeautifier',
        'jshint',
        'test',
        'browserify:syrupDebug',
        'browserify:syrup',
        'uglify',
        'concat:licence',
        'karma:syrup',
        'yuidoc'
    ]);
    
    // build task
    grunt.registerTask('build-json', [
        'browserify:syrupDebug',
        'browserify:syrup',
        'uglify',
        'concat:licence',
        'karma:syrup',
        'yuidoc'
    ]);
};