/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
 

module.exports = function (config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            "build/monoco-min.js",
            "spec/monoco/monoco-spec.js",
            "spec/monoco/component-spec.js",
            "spec/monoco/metamodel-spec.js",
            "spec/monoco/database-spec.js",
            "spec/monoco/classInfo-spec.js",
            "spec/monoco/system-spec.js",
            "spec/monoco/mson-spec.js",
            "spec/monoco/channel-spec.js"
        ],
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'build/monoco-min.js': ['coverage']
        },
        colors: true,
        autoWatch: true,
        browsers: ['Chrome', 'Firefox'],
        plugins: [
            'karma-coverage',
            'karma-script-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],
        singleRun: true
    });
};