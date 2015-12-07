var
  taskPath          = './gulp-task/',
  gulp              = require('gulp'),
  plugins           = require('gulp-load-plugins')()
;

// jshint ignore: start
var fs = require('fs');
require.extensions[".json"] = function (m) {
  m.exports = JSON.parse(fs.readFileSync(m.filename));
};

plugins.$$is_dev = function is_dev() {
  return !(process.env.NODE_ENV == 'prod');
};

plugins.get_env = function get_env() {
  return this.$$is_dev() ? 'dev' : 'prod';
};

require('fs').readdirSync(taskPath).forEach(function (taskFile) {
  require(taskPath + taskFile)(gulp, plugins);
});

gulp.task('default', ['build'], function () {});
