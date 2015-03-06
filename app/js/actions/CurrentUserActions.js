'use strict';

var Reflux = require('reflux');

var CurrentUserActions = Reflux.createActions([

  'checkLoginStatus',
  'login',
  'logout'

]);

module.exports = CurrentUserActions;