'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copyIcons', function() {

  // Copy icons from root directory to build/
  return gulp.src(['./*.png', './favicon.ico'])
    .pipe(gulp.dest(config.buildDir));

});
