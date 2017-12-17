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

module.exports = config => {
  // browers
  const browsers = ['ChromeHeadless'];

  // reporters
  let reporters = ['progress', 'coverage'];
  if (process.env.TRAVIS) {
    reporters = ['progress', 'coverage', 'dots'];
  }

  config.set({
    basePath: './',
    frameworks: ['mocha', 'chai'],
    files: [
      'dist/system-runtime.min.js',
      'test/runtime/runtime-spec.js',
      'test/runtime/component-spec.js',
      'test/runtime/metamodel-spec.js',
      'test/runtime/database-spec.js',
      'test/runtime/classInfo-spec.js',
      'test/runtime/system-spec.js',
      'test/runtime/mson-spec.js'
    ],
    reporters: reporters,
    preprocessors: {
      'dist/system-runtime.min.js': ['coverage']
    },
    colors: true,
    autoWatch: true,
    plugins: [
      'karma-coverage',
      'karma-script-launcher',
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-chai'
    ],
    singleRun: true,
    browsers: browsers
  });
};
