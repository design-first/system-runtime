/* 
 * monoco
 * Design.Create.Compose
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
            "test/monoco/monoco-spec.js",
            "test/monoco/component-spec.js",
            "test/monoco/metamodel-spec.js",
            "test/monoco/database-spec.js",
            "test/monoco/classInfo-spec.js",
            "test/monoco/system-spec.js",
            "test/monoco/mson-spec.js"
        ],
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'build/monoco-min.js': ['coverage']
        },
        colors: true,
        autoWatch: true,
        browsers: ['Firefox'],
        plugins: [
            'karma-coverage',
            'karma-script-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],
        singleRun: true
    });
};