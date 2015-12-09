module.exports = function (gulp, $) {
  "use strict";

  gulp.task('watch', ['serve'], function () {
    gulp.watch(['src/js/**/*.ts'], ['typescript']).on('change', $._START_SERVER ? $.notifyLiveReload : $.util.noop);
    gulp.watch(['src/index.html'], ['index']).on('change', $._START_SERVER ? $.notifyLiveReload : $.util.noop);
    gulp.watch(['bower.json'], ['bower']).on('change', $._START_SERVER ? $.notifyLiveReload : $.util.noop);
  });
};
