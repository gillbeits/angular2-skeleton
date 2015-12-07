module.exports = function (gulp, $) {
  "use strict";

  gulp.task('build', function () {
    process.env.NODE_ENV = 'prod';
    gulp.start('index');
  });
};
