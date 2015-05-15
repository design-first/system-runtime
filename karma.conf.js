// Karma configuration

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
            'karma-safari-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],
        singleRun: true
    });
};