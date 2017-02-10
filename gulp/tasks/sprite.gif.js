'use strict';

module.exports = function() {

    $.gulp.task('sprite:gif', function () {
        //var spriteData = $.gulp.src('./source/sprite/*.gif')
        return $.gulp.src('./source/sprite/*.gif')
            .pipe($.spritesmith({
                imgName: 'sprite.gif',
                cssName: 'sprite-gif.css'
            }))
            // return spriteData.pipe($.gulp.dest('build/assets/img/sprite/'));
            //.pipe($.gulp.dest('build/assets/img/output/'));

            .pipe($.gulp.dest($.config.root + '/assets/img/sprite'));

            //.pipe($.gulpif('*.gif', $.gulp.dest($.config.root + '/assets/img/sprite')))
            //.pipe($.gulpif('*.css', $.gulp.dest($.config.root + '/assets/css/')));

    });

};
