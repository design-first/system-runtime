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
    watch: grunt.file.readJSON('tasks/watch.json'),
    clean: grunt.file.readJSON('tasks/clean.json'),
    jshint: grunt.file.readJSON('tasks/jshint.json'),
    jsbeautifier: grunt.file.readJSON('tasks/jsbeautifier.json'),
    yuidoc: grunt.file.readJSON('tasks/yuidoc.json'),
    jasmine_nodejs: grunt.file.readJSON('tasks/jasmine_nodejs.json'),
    karma: grunt.file.readJSON('tasks/karma.json'),
    browserify: grunt.file.readJSON('tasks/browserify.json'),
    uglify: grunt.file.readJSON('tasks/uglify.json'),
    concat: grunt.file.readJSON('tasks/concat.json'),
    'merge-json': grunt.file.readJSON('tasks/merge-json.json')
  });

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

  grunt.registerTask('test', [
    'merge-json',
    'concat:systemModule',
    'jasmine_nodejs:modules'
  ]);

  grunt.registerTask('build', [
    'merge-json',
    'concat:systemModule',
    'jsbeautifier',
    'jshint',
    'jasmine_nodejs:modules',
    'browserify:debug',
    'browserify:release',
    'uglify:release',
    'concat:license',
    'karma:release',
    'yuidoc'
  ]);
};