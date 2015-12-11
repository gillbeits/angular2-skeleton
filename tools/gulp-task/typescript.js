module.exports = function (gulp, $) {
  "use strict";

  var merge = require('merge2');

  gulp.task('typescript', ['npm-files'], function () {
  var tsResult = gulp.src('src/js/**/*.ts')
      .pipe($.cached('typescript-temp', { optimizeMemory: true }))
      .pipe($.print())
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe($.typescript($.typescript.createProject('tsconfig.json', { module: 'system', sortOutput: true })))
    ;
    return merge([
      tsResult.dts
        .pipe(gulp.dest($._path.join($._BUILD_DIR, $.get_env(), 'js', 'typings'))),
      tsResult.js
        .pipe($.sourcemaps.write({ sourceRoot: '/ts' }))
        .pipe(gulp.dest($._path.join($._BUILD_DIR, $.get_env(), 'js', 'app')))

        .pipe($.if('*.js', ($.$$is_dev() ? $.util.noop() : $.sourcemaps.init({ loadMaps: true }))))
        .pipe($.if('*.js', ($.$$is_dev() ? $.util.noop() : $.uglify())))
        .pipe($.if('*.js', ($.$$is_dev() ? $.util.noop() : $.sourcemaps.write('../maps/', { sourceRoot: '/maps/js' }))))

        .pipe(($.$$is_dev() ? $.util.noop() : gulp.dest($._path.join($._BUILD_DIR, $.get_env(), 'js', 'app'))))
      ]);
  });
};
