'use strict';

module.exports = function() {
  $.gulp.task('sprite:svg', function () {
    return $.gulp.src('./source/sprite/*.svg')
        .pipe($.svgSprite())
        .pipe($.gulp.dest($.config.root + '/assets/img/sprite'));
  });
};
