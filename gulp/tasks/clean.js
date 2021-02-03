/* eslint-disable no-undef */
'use strict';

module.exports = function() {
  $.gulp.task('clean', function(cb) {
    return $.del($.config.root, cb);
  });
};

