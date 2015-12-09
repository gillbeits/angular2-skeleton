module.exports = function (gulp, $) {
  "use strict";

  gulp.task('index', ['bower', 'typescript'], function () {
    return gulp.src('src/index.html')
        .pipe($.$$is_dev() ? $.util.noop() : $.useref({ searchPath: 'build/dev' }))
        .pipe($.$$is_dev() ? $.util.noop() : $.if('*.js', $.uglify()))
        .pipe(gulp.dest('build/' + $.get_env()));
  });
};
