module.exports = function (gulp, $) {
  "use strict";

  var
    connectLivereload = require('connect-livereload'),
    express           = require('express'),
    tinyLrFn          = require('tiny-lr'),
    serveStatic       = require('serve-static'),
    path              = require('path'),
    open              = require('open')
  ;

  var tinyLr = tinyLrFn();

  if ($._START_SERVER) {
    $.notifyLiveReload = function notifyLiveReload (e) {
      var fileName = $._path.relative($._path.join($._BUILD_DIR, 'dev'), e.path);
      tinyLr.changed({
        body: { files: [fileName] }
      });
      return e;
    };
  }

  function startExpress () {
    var server = express();
    tinyLr.listen($._LIVERELOAD_PORT);

    server.use(
      "/",
      connectLivereload({ port: $._LIVERELOAD_PORT }),
      express.static(process.cwd() + $._APP_BASE)
    );
    server.listen($._PORT, function () {
      if ($._OPEN && $._START_SERVER) {
        return open('http://localhost:' + $._PORT + '/');
      }
      return true;
    });
  }

  gulp.task('serve', ['index'], function () {
    if ($._START_SERVER) {
      startExpress();
    }
  });
};
