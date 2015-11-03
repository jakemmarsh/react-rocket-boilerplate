'use strict';

const config = {

  browserPort: 3000,
  UIPort: 3001,

  scripts: {
    src: './src/scripts/**/*.js',
    dest: './build/scripts/'
  },

  images: {
    src: './src/images/**/*.{jpeg,jpg,png}',
    dest: './build/images/'
  },

  styles: {
    src: './src/styles/**/*.scss',
    dest: './build/styles/'
  },

  sourceDir: './src/',

  buildDir: './build/'

};

export default config;