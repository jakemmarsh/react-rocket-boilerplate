'use strict';

const config = {

  browserPort: 3000,
  UIPort: 3001,

  scripts: {
    src: './app/js/**/*.js',
    dest: './build/js/'
  },

  images: {
    src: './app/images/**/*.{jpeg,jpg,png,gif}',
    dest: './build/images/'
  },

  styles: {
    src: './app/styles/**/*.scss',
    dest: './build/css/'
  },

  sourceDir: './app/',

  buildDir: './build/',

  testFiles: './__tests__/**/*.{js,jsx}',

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ]

};

export default config;