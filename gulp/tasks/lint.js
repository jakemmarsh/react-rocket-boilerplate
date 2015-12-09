'use strict';

import gulp   from 'gulp';
import eslint from 'gulp-eslint';
import config from '../config';

gulp.task('lint', function() {

  return gulp.src([config.scripts.src, config.testFiles, './*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

});