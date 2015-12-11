module.exports = function (gulp, $) {
  "use strict";

  gulp.task('bower', function () {
    return gulp.src('bower.json')
      .pipe($.plumber())
      .pipe($.mainBowerFiles(function (error) {
        if (error) {
          $.util.log(error.message);
        }
      }))
      .pipe($.cached('bower-temp', { optimizeMemory: true }))
      .pipe($.print())
      .pipe(gulp.dest($._path.join($._BUILD_DIR, 'dev', 'libs')))
    ;
  });
};
