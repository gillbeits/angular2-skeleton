module.exports = function (gulp, $) {
  "use strict";

  var runSequence = require('run-sequence');

  function getNotifier (tasks) {
    return function (e) {
      runSequence(tasks, function () {
        $._START_SERVER ? $.notifyLiveReload(e) : $.util.noop();
      });
    };
  }

  gulp.task('watch', ['serve'], function () {
    $.watch(['src/js/**/*.ts'], getNotifier('typescript'));
    $.watch(['src/stylus/**/*.styl'], getNotifier('stylus'));
    $.watch(['src/index.jade'], getNotifier('index'));
    $.watch(['bower.json'], getNotifier('bower'));
    $.watch(['package.json'], getNotifier('npm-files'));
  });
};
