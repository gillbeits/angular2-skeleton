module.exports = function (gulp, $) {
  "use strict";

  gulp.task('watch', ['serve'], function () {
    gulp.watch(['src/js/**/*.ts'], ['typescript']);
    gulp.watch(['src/stylus/**/*.styl'], ['stylus']);
    gulp.watch(['src/index.jade'], ['index']);
    gulp.watch(['src/jade/**/*.jade'], ['jade']);
    gulp.watch(['bower.json'], ['bower']);
    gulp.watch(['package.json'], ['npm-files']);

    gulp.watch([
      $._path.join($._BUILD_DIR, $.get_env(), '/**/*.css'),
      $._path.join($._BUILD_DIR, $.get_env(), '/**/*.js'),
      $._path.join($._BUILD_DIR, $.get_env(), '/**/*.html')
    ]).on('change', $._START_SERVER ? $.notifyLiveReload : $.util.noop);
  });
};
