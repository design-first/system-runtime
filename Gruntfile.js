/*
 * Runtime
 * The System Runtime Environment
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2014-1016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function(grunt) {
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
        clean: ['doc', 'dist', 'build', 'coverage'],
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
            runtime: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    linkNatives: 'true',
                    paths: ['src', 'dist'],
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
            runtime: {
                specs: [
                    "test/module/**",
                    "test/runtime/**"
                ]
            }
        },
        karma: {
            runtime: {
                configFile: 'karma.conf.js'
            }
        },
        browserify: {
            runtimeDebug: {
                src: ['src/runtime.js'],
                dest: 'dist/system-runtime.js',
                options: {
                    browserifyOptions: {
                        standalone: 'runtime',
                        debug: true
                    }
                }
            },
            runtime: {
                src: ['src/runtime.js'],
                dest: 'dist/system-runtime.min.js',
                options: {
                    browserifyOptions: {
                        standalone: 'runtime'
                    }
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= browserify.runtime.dest %>']
                }
            }
        },
        concat: {
            systemInfos: {
                options: {
                    process: function(src, filepath) {
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
                    'build/runtime.json': ['src/template/banner/system.txt']
                }
            },
            systemBehaviors: {
                options: {
                    process: function(src, filepath) {
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
                    'build/runtime.json': ['build/runtime.json', 'src/system/behaviors/*/*.json']
                }
            },
            systemSchemas: {
                options: {
                    process: function(src, filepath) {
                        var result = '',
                            uuid = '',
                            schemas = {};

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        if (filepath.indexOf('build') !== -1) {
                            grunt.option('schemas', {});
                            result = src + '\n"schemas" : {},';
                        } else {
                            uuid = JSON.parse(src)._id;
                            if (typeof uuid === 'undefined') {
                                uuid = generateId();
                            }
                            schemas = grunt.option('schemas');
                            schemas[uuid] = JSON.parse(src);
                            schemas[uuid]._id = uuid;
                        }
                        return result;
                    }
                },
                files: {
                    'build/runtime.json': ['build/runtime.json', 'src/system/schemas/*.json']
                }
            },
            systemModels: {
                options: {
                    process: function(src, filepath) {
                        var result = '',
                            uuid = '',
                            models = {};

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        if (filepath.indexOf('build') !== -1) {
                            grunt.option('models', {});
                            result = src + '\n"models" : {},';
                        } else {
                            uuid = JSON.parse(src)._id;
                            if (typeof uuid === 'undefined') {
                                uuid = generateId();
                            }
                            models = grunt.option('models');
                            models[uuid] = JSON.parse(src);
                            models[uuid]._id = uuid;
                        }
                        return result;
                    }
                },
                files: {
                    'build/runtime.json': ['build/runtime.json', 'src/system/models/*.json']
                }
            },
            systemTypes: {
                options: {
                    process: function(src, filepath) {
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
                    'build/runtime.json': ['build/runtime.json', 'src/system/types/*.json']
                }
            },
            systemComponents: {
                options: {
                    process: function(src, filepath) {
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
                    'build/runtime.json': ['build/runtime.json', 'src/system/components/*/*.json']
                }
            },
            systemFill: {
                options: {
                    process: function(src, filepath) {
                        var system = {};

                        system = JSON.parse(src);
                        system.components = grunt.option('components');
                        system.schemas = grunt.option('schemas');
                        system.models = grunt.option('models');
                        system.types = grunt.option('types');
                        system.behaviors = grunt.option('behaviors');

                        // process addon in order to insert subsytem                 
                        system.components.RuntimeSystem = {};

                        grunt.file.recurse('src/addons', loadSubSystem);

                        function loadSubSystem(abspath, rootdir, subdir, filename) {
                            if (filename.indexOf('.') !== 0) {
                                var subSystem = grunt.file.readJSON(abspath);

                                system.components.RuntimeSystem[subSystem._id] = {
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
                    'build/runtime.json': ['build/runtime.json']
                }
            },
            systemModule: {
                files: {
                    'build/system/system.js': ['src/template/banner/systemmodule.txt', 'build/runtime.json', 'src/template/footer/systemmodule.txt']
                }
            },
            licence: {
                options: {
                    process: function(src, filepath) {
                        var result = '';

                        // ID & version
                        result = src.replace('{version}', grunt.file.readJSON('package.json').version).trim();

                        return result;
                    }
                },
                files: {
                    'dist/system-runtime.min.js': ['src/template/banner/licence.txt', 'dist/system-runtime.min.js']
                }
            }
        },
        "merge-json": {
            runtime: {
                src: ["src/addons/*.json", "build/runtime.json"],
                dest: "build/runtime.json"
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
        'concat:systemModels',
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
        'jasmine_nodejs:runtime'
    ]);

    // debug task
    grunt.registerTask('debug', [
        'system-json',
        'merge-json',
        'system-js',
        'jsbeautifier',
        'jshint',
        'test',
        'browserify:runtimeDebug'
    ]);

    // build task
    grunt.registerTask('build', [
        'system-json',
        'merge-json',
        'system-js',
        'jsbeautifier',
        'jshint',
        'test',
        'browserify:runtimeDebug',
        'browserify:runtime',
        'uglify',
        'concat:licence',
        'karma:runtime',
        'yuidoc'
    ]);

    // build task
    grunt.registerTask('build-json', [
        'browserify:runtimeDebug',
        'browserify:runtime',
        'uglify',
        'concat:licence',
        'karma:runtime',
        'yuidoc'
    ]);
};