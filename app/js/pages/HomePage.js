/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var HomePage = React.createClass({

  propTypes: {
    updatePageTitle: React.PropTypes.func
  },

  componentDidMount: function() {
    this.props.updatePageTitle('Home');
  },

  render: function() {
    return (
      <section className="home-page">
        Home
      </section>
    );
  }

});

module.exports = HomePage;