/**
 * @jsx React.DOM
 */
'use strict';

var React        = require('react/addons');
var RouteHandler = React.createFactory(require('react-router').RouteHandler);

var Header       = require('./components/Header');
var Footer       = require('./components/Footer');

var App = React.createClass({

  render: function() {
    return (
      <div>

        <Header />

        <RouteHandler params={this.props.params}
                      query={this.props.query}
                      updatePageTitle={this.updatePageTitle} />

        <Footer />

      </div>
    );
  }

});

module.exports = App;