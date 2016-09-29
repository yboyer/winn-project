const conf = require('./gulp.conf');
const glob = require('glob');

module.exports = function (config) {
  const configuration = {
    basePath: '../',
    singleRun: true,
    autoWatch: false,
    logLevel: 'INFO',
    junitReporter: {
      outputDir: 'test-reports'
    },
    browsers: [
      'Chrome'
    ],
    frameworks: [
      'jasmine',
      'jspm'
    ],
    jspm: {
      loadFiles: glob.sync(conf.path.src('app/**/*.js')),
      config: 'jspm.config.js',
      browser: 'jspm.test.js',
      serveFiles: glob.sync(conf.path.src('app/**/*.html'))
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-jspm')
    ],
    files: [
      'src/ignore/pikaday.js',
      'src/ignore/material/material.js'
    ]
  };

  config.set(configuration);
};
