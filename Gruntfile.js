/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2017 Erwan Carriou
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
            modules: {
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
            modules: {
                specs: [
                    "test/module/**",
                    "test/runtime/**"
                ]
            }
        },
        karma: {
            release: {
                configFile: 'karma.conf.js'
            }
        },
        browserify: {
            debug: {
                src: ['src/runtime.js'],
                dest: 'dist/system-runtime.js',
                options: {
                    browserifyOptions: {
                        standalone: 'runtime',
                        debug: true
                    }
                }
            },
            release: {
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
            release: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= browserify.release.dest %>']
                }
            }
        },
        concat: {
            systemModule: {
                files: {
                    'build/system/system.js': ['src/template/banner/systemmodule.txt', 'build/sytem-runtime.json', 'src/template/footer/systemmodule.txt']
                }
            },
            license: {
                files: {
                    'dist/system-runtime.min.js': ['src/template/banner/license.txt', 'dist/system-runtime.min.js']
                }
            }
        },
        "merge-json": {
            system: {
                src: ["src/addons/*.json", "src/system/system-runtime.json"],
                dest: "build/sytem-runtime.json"
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


    // doc task
    grunt.registerTask('doc', [
        'yuidoc'
    ]);

    // test task
    grunt.registerTask('test', [
        'jasmine_nodejs:modules'
    ]);

    // debug task
    grunt.registerTask('debug', [
        'merge-json',
        'concat:systemModule',
        'jsbeautifier',
        'jshint',
        'test',
        'browserify:debug'
    ]);

    // build task
    grunt.registerTask('build', [
        'merge-json',
        'concat:systemModule',
        'jsbeautifier',
        'jshint',
        'test',
        'browserify:debug',
        'browserify:release',
        'uglify:release',
        'concat:license',
        'karma:release',
        'doc'
    ]);
};