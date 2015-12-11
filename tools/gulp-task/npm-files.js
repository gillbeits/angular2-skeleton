module.exports = function (gulp, $) {
  "use strict";

  gulp.task('npm-files', function () {
    return gulp.src($.npmFiles(), { base: 'node_modules/' })
      .pipe($.plumber())
      .pipe($.cached('npm-files-temp', { optimizeMemory: true }))
      .pipe($.print())
      .pipe(gulp.dest($._path.join($._BUILD_DIR, 'dev', 'libs')))
    ;
  });
};
