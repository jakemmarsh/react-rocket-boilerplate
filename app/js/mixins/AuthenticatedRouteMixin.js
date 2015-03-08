'use strict';

var _                = require('lodash');
var Navigation       = require('react-router').Navigation;

var CurrentUserStore = require('../stores/CurrentUserStore');

var AuthenticatedRouteMixin = {

  mixins: [Navigation],

  _checkIfRedirect: function() {
    if ( _.isEmpty(CurrentUserStore.user) && CurrentUserStore.hasBeenChecked && this.isMounted() ) {
      this.replaceWith('Home');
    }
  },

  componentDidMount: function() {
    this._checkIfRedirect();
  },

  componentDidUpdate: function() {
    this._checkIfRedirect();
  }

};

module.exports = AuthenticatedRouteMixin;