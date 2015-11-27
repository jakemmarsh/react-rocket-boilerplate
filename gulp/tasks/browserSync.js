'use strict';

import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';
import config      from '../config';

gulp.task('browserSync', function() {

  const DEFAULT_FILE = 'index.html';
  const ASSET_EXTENSIONS = ['js', 'css', 'png', 'jpg', 'jpeg', 'gif'];

  browserSync.init({
    server: {
      baseDir: config.buildDir,
      index: DEFAULT_FILE
    },
    port: config.browserPort,
    ui: {
      port: config.UIPort
    },
    ghostMode: {
      links: false
    }
  });

});
