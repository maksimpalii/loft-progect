'use strict';

module.exports = function() {
    $.gulp.task('copy:svg', function() {
        return $.gulp.src('./source/sprite/**/*.*', { since: $.gulp.lastRun('copy:svg') })
            .pipe($.gulp.dest($.config.root + '/assets/img/sprite/svg'));
    });
};
