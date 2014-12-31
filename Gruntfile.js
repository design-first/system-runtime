module.exports = function (grunt) {
    // config
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
                'spec/*.js'
            ],
            options: {
                force: true,
                node: true,
                globals: {
                    'monoco': true
                }
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
        jasmine_node: {
            options: {
                forceExit: true,
                match: '.',
                matchall: false,
                extensions: 'js',
                specNameMatcher: 'spec'
            },
            all: ['spec/']
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
            systemBehaviors: {
                options: {
                    process: function (src, filepath) {
                        var uid = generateId(),
                        result = '';

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        if (filepath.indexOf('banner') !== -1 || filepath.indexOf('footer') !== -1) {

                            if (filepath.indexOf('banner') !== -1) {

                                // ID & version
                                src = src.replace('{version}', grunt.file.readJSON('package.json').version).trim();
                                src = src.replace('{id}', generateId());

                                result = src + '\n"behaviors" : {';
                            } else {
                                result = src;
                            }

                        } else {
                            src = src.replace('{', '{"_id":"' + uid + '",');
                            result = '\"' + uid + '\"' + ':' + src.trim() + ',';
                        }
                        return result;
                    }
                },
                files: {
                    'build/monoco.json': ['src/template/banner/system.txt', 'src/system/behaviors/*/*.json']
                }
            },
            systemSchemas: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                        uid = '';

                        if (filepath.indexOf('build') !== -1) {
                            result = src + '},\n"schemas" : {';
                        } else {
                            uid = JSON.parse(src)._id;
                            result = '\"' + uid + '\"' + ':' + src.trim() + ',';
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
                        uid = '';

                        if (filepath.indexOf('build') !== -1) {
                            result = src + '},\n"types" : {';
                        } else {
                            uid = JSON.parse(src).name;
                            result = '\"' + uid + '\"' + ':' + src.trim() + ',';
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
                        uid = '',
                        collectionName = '';

                        if (filepath.indexOf('build') !== -1) {
                            result = src + '},\n"components" : {';
                        } else {
                            uid = JSON.parse(src)._id;

                            collectionName = filepath.split('components/')[1];
                            collectionName = collectionName.split('/')[0];
                            src = src.replace('{version}', grunt.file.readJSON('package.json').version).trim();
                            result = '\"' + collectionName + '\": {\"' + uid + '\"' + ':' + src.trim() + '},';
                        }
                        return result;
                    }
                },
                files: {
                    'build/monoco.json': ['build/monoco.json', 'src/system/components/*/*.json']
                }
            },
            systemClean: {
                options: {
                    process: function (src, filepath) {
                        var result = '';

                        if (filepath.indexOf('build') !== -1) {
                            src = src.replace(/\}\,\}\,/g, '}},');
                            result = src.substring(0, src.length - 1);
                        } else {
                            result = src;
                        }

                        return result;
                    }
                },
                files: {
                    'build/monoco.json': ['build/monoco.json', 'src/template/footer/system.txt']
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
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-merge-json');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-karma');


    // system JSON task
    grunt.registerTask('system-json', [
        'concat:systemBehaviors',
        'concat:systemSchemas',
        'concat:systemComponents',
        'concat:systemTypes',
        'concat:systemClean'
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
        'jasmine_node'
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