// Karma configuration

module.exports = function (config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            "build/monoco-min.js",
            "spec/monoco-spec.js",
            "spec/component-spec.js",
            "spec/metamodel-spec.js",
            "spec/database-spec.js",
            "spec/classInfo-spec.js",
            "spec/system-spec.js",
            "spec/mson-spec.js"
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
