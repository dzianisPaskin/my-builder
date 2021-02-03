/* eslint-disable no-undef */
'use strict';

module.exports = function() {
  var spriteData = $.gulp.task('sprite:png', function() {
    $.gulp.src('.sprite/images/*.png').pipe(
      $.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css',
      })
    );
    var imgStream = spriteData.img

      .pipe($.gp.buffer())
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + './sprite/images/'));

    var cssStream = spriteData.css

      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + './sprite/styles/'));
    return $.merge(imgStream, cssStream);
  });
};