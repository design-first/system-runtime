/*
 * System Runtime
 *
 * https://designfirst.io/systemruntime/
 *
 * Copyright 2022 Erwan Carriou
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

module.exports = (grunt) => {
  // load tasks
  require('load-grunt-tasks')(grunt)

  // init configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: grunt.file.readJSON('tasks/clean.json'),
    concat: grunt.file.readJSON('tasks/concat.json'),
    json_merge: grunt.file.readJSON('tasks/json_merge.json'),
  })

  // build system
  grunt.registerTask('system', ['clean', 'json_merge', 'concat:system'])

  // add licence
  grunt.registerTask('licence', ['concat:license'])
}
