'use strict';

module.exports = function() {

    $.gulp.task('sprite:png', function () {
        //var spriteData = $.gulp.src('./source/sprite/*.png')
        return $.gulp.src('./source/sprite/*.png')
            .pipe($.spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite-png.css'
        }))
       // return spriteData.pipe($.gulp.dest('build/assets/img/sprite/'));
       //.pipe($.gulp.dest('build/assets/img/output/'));
       .pipe($.gulp.dest($.config.root + '/assets/img/sprite'));

        //.pipe($.gulpif('*.png', $.gulp.dest($.config.root + '/assets/img/sprite')))
        //.pipe($.gulpif('*.css', $.gulp.dest($.config.root + '/assets/css/')));

    });


};
