const conf = require('./gulp.conf');

module.exports = function () {
  return {
    proxy: "localhost:3000/gui/",
    // server: {
    //   baseDir: [
    //     conf.paths.dist
    //   ]
    // },
    open: true
  };
};
