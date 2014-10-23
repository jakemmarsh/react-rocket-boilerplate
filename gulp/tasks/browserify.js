'use strict';

var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var source       = require('vinyl-source-stream');
var streamify    = require('gulp-streamify');
var rename       = require('gulp-rename');
var watchify     = require('watchify');
var browserify   = require('browserify');
var reactify     = require('reactify');
var uglify       = require('gulp-uglify');
var handleErrors = require('../util/handle-errors');
var config       = require('../config');

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch) {

  var bundler = browserify({
    entries: [config.sourceDir + 'js/' + file],
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  if ( watch ) {
    bundler = watchify(bundler);
    bundler.on('update', function() {
      rebundle();
      gutil.log('Rebundle...');
    });
  }

  bundler.transform(reactify);

  function rebundle() {
    var stream = bundler.bundle();
    return stream.on('error', handleErrors)
    .pipe(source(file))
    .pipe(gulpif(global.isProd, streamify(uglify())))
    .pipe(streamify(rename({
      basename: 'main'
    })))
    .pipe(gulp.dest(config.scripts.dest));
  }

  return rebundle();

}

gulp.task('browserify', function() {

  // Only run watchify if NOT production
  return buildScript('index.js', !global.isProd);

});