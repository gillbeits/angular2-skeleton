var
  taskPath = './tools/gulp-task/',
  yargs    = require('yargs'),
  gulp     = require('gulp'),
  plugins  = require('gulp-load-plugins')()
;

yargs.boolean([
  'start-server',
  'open'
]).default({
  'start-server': true,
  'open': true
});

plugins._ENV             = yargs.argv.env                   || 'dev';
plugins._PORT            = yargs.argv.port                  || '8080';
plugins._LIVERELOAD_PORT = yargs.argv.livePort              || '4002';
plugins._DOCS_PORT       = yargs.argv.docsPort              || '4003';
plugins._APP_BASE        = yargs.argv.base                  || '/build/' + plugins._ENV;
plugins._OPEN            = yargs.argv.open;
plugins._START_SERVER    = yargs.argv.startServer;

// jshint ignore: start
var fs = require('fs');
require.extensions[".json"] = function (m) {
  m.exports = JSON.parse(fs.readFileSync(m.filename));
};

plugins.$$is_dev = function is_dev() {
  return !(plugins._ENV == 'prod');
};

plugins.get_env = function get_env() {
  return this.$$is_dev() ? 'dev' : 'prod';
};

require('fs').readdirSync(taskPath).forEach(function (taskFile) {
  require(taskPath + taskFile)(gulp, plugins);
});

gulp.task('default', ['build'], function () {});
