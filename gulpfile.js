'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  csso: require('gulp-csso'),
  spritesmith: require('gulp.spritesmith'),
  svgSprite: require("gulp-svg-sprites"),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'copy:image',
    //'copy:svg',
    'copy:font',
    'css:foundation',
    'sprite:svg',
    'sprite:png',
    'sprite:gif'
  ),

  $.gulp.parallel(
    'watch',
    'serve'
  )
));


