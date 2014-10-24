'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(callback) {

  callback = callback || function() {};

  global.isProd = false;

  // Run all tasks once
  runSequence('sass', 'imagemin', 'browserify', 'copyFonts', 'copyIndex', 'copyIcons', callback);

  // Then, run the watch task to keep tabs on changes
  gulp.start('watch');

});