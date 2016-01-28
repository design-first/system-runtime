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

module.exports = function (config) {
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

    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            "build/system-runtime.min.js",
            "test/syrup/syrup-spec.js",
            "test/syrup/component-spec.js",
            "test/syrup/metamodel-spec.js",
            "test/syrup/database-spec.js",
            "test/syrup/classInfo-spec.js",
            "test/syrup/system-spec.js",
            "test/syrup/mson-spec.js"
        ],
        reporters: ['progress', 'coverage', 'dots', 'saucelabs'],
        preprocessors: {
            'build/system-runtime.min.js': ['coverage']
        },
        colors: true,
        autoWatch: true,
        plugins: [
            'karma-coverage',
            'karma-script-launcher',
            'karma-sauce-launcher',
            'karma-jasmine'
        ],
        singleRun: true,
        sauceLabs: {
            testName: 'SyrupJS Unit Tests',
            tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
            startConnect: false
        },
        customLaunchers: customLaunchers,
        browsers: Object.keys(customLaunchers)
    });
};