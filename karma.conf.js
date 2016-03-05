/*
 * Runtime
 * The JSON Runtime Environment
 * https://system-runtime.github.io
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

module.exports = function (config) {
    // customLaunchers
    var customLaunchers = {
        sl_chrome: {
            base: 'SauceLabs',
            browserName: 'chrome',
            version: '47'
        },
        sl_firefox: {
            base: 'SauceLabs',
            browserName: 'firefox',
            version: '43'
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
            "build/system-runtime.min.js",
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
            'build/system-runtime.min.js': ['coverage']
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