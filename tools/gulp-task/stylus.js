/**
 * Created by gillbeits on 11.12.15.
 */
module.exports = function (gulp, $) {
  "use strict";

  gulp.task('stylus', function () {

    return gulp.src('src/stylus/index.styl')
      .pipe($.plumber())
      .pipe($.print())
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.stylus({
        use: [
          require('nib')()
        ],
        compress: true,
        sourcemap: { inline: true }
      }))
      .pipe($.autoprefixer({
        browsers: ['> 1%', 'last 2 versions'],
        cascade: false
      }))
      .pipe($.rename('styles.css'))
      .pipe($.sourcemaps.write('../maps', { sourceRoot: '/stylus' }))
      .pipe(gulp.dest($._path.join($._BUILD_DIR, $.get_env(), 'css', 'app')))
    ;
  });
};