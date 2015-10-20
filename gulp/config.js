'use strict';

const config = {

  browserPort: 3000,
  UIPort: 3001,

  scripts: {
    src: './app/js/**/*.js',
    dest: './build/js/'
  },

  images: {
    src: './app/images/**/*.{jpeg,jpg,png}',
    dest: './build/images/'
  },

  styles: {
    src: './app/styles/**/*.scss',
    dest: './build/css/'
  },

  sourceDir: './app/',

  buildDir: './build/'

};

export default config;