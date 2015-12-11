var
  taskPath = './tools/gulp-task/',
  yargs    = require('yargs'),
  gulp     = require('gulp'),
  plugins  = require('gulp-load-plugins')()
;

yargs
  .boolean([
    'start-server',
    'open-in-browser'
  ])
  .string([
    'port',
    'build-dir',
    'live-port',
    'docs-port',
    'config'
  ])
  .alias({
    e: 'env',
    s: 'start-server',
    o: 'open-in-browser',
    p: 'port',
    b: 'build-dir',
    l: 'live-port',
    d: 'docs-port',
    c: 'config'
  })
  .describe({
    e: 'Build environment',
    s: 'Start Express server',
    o: 'Open index page in your default browser is express server start',
    p: 'Express listen port',
    b: 'Build directory name',
    l: 'Live Reload port',
    d: 'Documentation port',
    c: 'Config JSON file path'
  })
  .choices('e', ['dev', 'prod'])
  .default({
    startServer: true,
    openInBrowser: true,
    env: 'dev',
    port: '8080',
    livePort: '4002',
    docsPort: '4003',
    buildDir: 'build',
    config: './src/config.json'
  })
  .help('help')
  .wrap(yargs.terminalWidth())
;

plugins._ENV             = yargs.argv.env;
plugins._PORT            = yargs.argv.port;
plugins._LIVERELOAD_PORT = yargs.argv.livePort;
plugins._DOCS_PORT       = yargs.argv.docsPort;
plugins._BUILD_DIR       = yargs.argv.buildDir;
plugins._CONFIG          = yargs.argv.config;
plugins._OPEN            = yargs.argv.openInBrowser;
plugins._START_SERVER    = yargs.argv.startServer;
plugins._APP_BASE        = '/' + plugins._BUILD_DIR + '/' + plugins._ENV;

plugins._path            = require('path');

// jshint ignore: start
var fs = require('fs');
require.extensions[".json"] = function (m) {
  m.exports = JSON.parse(fs.readFileSync(m.filename));
};

plugins.$$is_dev = function is_dev() {
  return !(plugins._ENV == 'prod');
};

plugins.get_env = function get_env() {
  return plugins._ENV;
};

plugins.config = require(plugins._CONFIG);

require('fs').readdirSync(taskPath).forEach(function (taskFile) {
  require(taskPath + taskFile)(gulp, plugins);
});

gulp.task('default', ['build'], function () {});
