/**
 * @jsx React.DOM
 */
'use strict';

var React  = require('react/addons');

var Header = require('./components/Header');
var Footer = require('./components/Footer');

var App = React.createClass({

  updatePageTitle: function(title) {
    var newPageTitle = '';

    if ( title ) {
      newPageTitle += title;
      newPageTitle += ' \u2014 ';
    }

    newPageTitle += 'App Name';

    document.title = newPageTitle;
  },

  render: function() {
    return (
      <div>

        <Header />

        <this.props.activeRouteHandler updatePageTitle={this.updatePageTitle} />

        <Footer />

      </div>
    );
  }

});

module.exports = App;