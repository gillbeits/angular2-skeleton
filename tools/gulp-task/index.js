module.exports = function (gulp, $) {
  "use strict";

  var slash = require('slash');

  function getInjectableRef (name) {
    return gulp.src($.config.inject[name].map(function (ref) {
      return $._path.join($._BUILD_DIR, 'dev', 'libs', ref);
    }), { read: false })
  }

  function transformPath (path) {
    arguments[0] = path.replace(new RegExp("^/" + $._path.join($._BUILD_DIR, 'dev')), '');
    return slash($.inject.transform.apply($.inject.transform, arguments));
  }

  gulp.task('index', ['bower', 'typescript', 'stylus', 'jade'], function () {

    var jadeOpts = {
      pretty: $.$$is_dev() ? true : false
    };

    return gulp.src('src/index.jade')
        .pipe($.jade(jadeOpts))
        .pipe($.inject(getInjectableRef("head:js"), { starttag: "<!-- inject:head:{{ext}} -->", transform: transformPath }))
        .pipe($.inject(getInjectableRef("head:css"), { starttag: "<!-- inject:head:{{ext}} -->", transform: transformPath }))
        .pipe($.inject(getInjectableRef("body:js"), { starttag: "<!-- inject:body:{{ext}} -->", transform: transformPath }))
        .pipe($.$$is_dev() ? $.util.noop() : $.useref({ searchPath: $._path.join($._BUILD_DIR, 'dev') }))
        .pipe($.$$is_dev() ? $.util.noop() : $.if('*.js', $.uglify()))
        .pipe($.$$is_dev() ? $.util.noop() : $.if('*.html', $.minifyHtml({ conditionals: true, spare:true })))
        .pipe(gulp.dest($._path.join($._BUILD_DIR, $.get_env())));
  });
};
