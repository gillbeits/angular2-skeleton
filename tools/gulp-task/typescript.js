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
        .pipe(gulp.dest('build/' + $.get_env() + '/js/typings')),
      tsResult.js
        .pipe($.sourcemaps.write({ sourceRoot: '/ts' }))
        .pipe(gulp.dest('build/' + $.get_env() + '/js/app'))

        .pipe($.if('*.js', $.sourcemaps.init({ loadMaps: true })))
        .pipe($.if('*.js', ($.$$is_dev() ? $.util.noop() : $.uglify())))
        .pipe($.if('*.js', $.sourcemaps.write('../maps/', { sourceRoot: '/maps/js' })))

        .pipe(gulp.dest('build/' + $.get_env() + '/js/app'))
      ]);
  });
};
