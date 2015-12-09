module.exports = function (gulp, $) {
  "use strict";

  gulp.task('build', function () {
    $._ENV = 'prod';
    gulp.start('index');
  });
};
