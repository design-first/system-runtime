/*
 * System Runtime
 * Design | Create | Compose
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2016 Erwan Carriou
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

module.exports = function (config) {
    // customLaunchers
    var customLaunchers = {
        sl_chrome: {
            base: 'SauceLabs',
            browserName: 'chrome',
            version: '48'
        },
        sl_firefox: {
            base: 'SauceLabs',
            browserName: 'firefox',
            version: '44'
        },
        sl_ie_11: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            version: '11'
        }
    };
    
    // browers
    var browsers = ['Firefox'];
    if (process.env.TRAVIS) {
        browsers = Object.keys(customLaunchers);
    }
    
    // sauceLabConfig
    var sauceLabConfig = {
        testName: 'Runtime Unit Tests',
    }
    if (process.env.TRAVIS) {
        sauceLabConfig = {
            testName: 'Runtime Unit Tests',
            tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
            startConnect: false
        }
    }
    
    // reporters
    var reporters = ['progress', 'coverage'];
    if (process.env.TRAVIS) {
       reporters = ['progress', 'coverage', 'dots', 'saucelabs']
    }

    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            "dist/system-runtime.min.js",
            "test/runtime/runtime-spec.js",
            "test/runtime/component-spec.js",
            "test/runtime/metamodel-spec.js",
            "test/runtime/database-spec.js",
            "test/runtime/classInfo-spec.js",
            "test/runtime/system-spec.js",
            "test/runtime/mson-spec.js"
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
            'karma-firefox-launcher',
            'karma-sauce-launcher',
            'karma-jasmine'
        ],
        singleRun: true,
        sauceLabs: sauceLabConfig,
        customLaunchers: customLaunchers,
        browsers: browsers
    });
};