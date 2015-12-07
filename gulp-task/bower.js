/**
 * Created by gillbeits on 01/04/15.
 */

var
  mainBowerFiles                = require('main-bower-files'),
  fs                            = require('fs');

module.exports = function (gulp, $) {
  "use strict";

  gulp.task('bower', function () {

    var filters = {
      js:       $.filter(['**/*.js', '**/*.js.map'], {restore: true}),
      css:      $.filter(['**/*.css'], {restore: true}),
      fonts:    $.filter('**/*.{svg,eot,ttf,woff,woff2}', {restore: true}),
      images:   $.filter('**/*.{gif,png,jpeg,jpg,swf}', {restore: true})
    };

    return gulp.src(mainBowerFiles({
        paths: {
          bowerJson: 'bower.json'
        }
      }))
      .pipe($.print())
      .pipe($.plumber())
      .pipe($.cached('vendor-temp', { optimizeMemory: true }))
      .pipe(filters.js)
      .pipe(gulp.dest('build/dev/js'))
      .pipe(filters.js.restore)
      .pipe(filters.css)
      .pipe(gulp.dest('build/dev/css'))
      .pipe(filters.css.restore)
      .pipe(filters.fonts)
      .pipe(gulp.dest('build/dev/fonts'))
      .pipe(filters.fonts.restore)
      .pipe(filters.images)
      .pipe(gulp.dest('build/dev/images'))
      .pipe(filters.images.restore)
    ;
  });
};
