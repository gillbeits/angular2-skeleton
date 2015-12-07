module.exports = function (gulp, $) {
  "use strict";

  gulp.task('typescript', function () {

    return gulp.src('src/js/**/*.ts')
      .pipe($.plumber())
      .pipe($.print())
      .pipe($.typescript($.typescript.createProject('tsconfig.json')))
      .pipe($.$$is_dev() ? $.util.noop() : $.uglify())
      .pipe(gulp.dest('build/' + $.get_env() + '/js'))
    ;
  });
};
