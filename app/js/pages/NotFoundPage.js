/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var NotFoundPage = React.createClass({

  propTypes: {
    updatePageTitle: React.PropTypes.func
  },

  componentDidMount: function() {
    this.props.updatePageTitle('Not Found');
  },

  render: function() {
    return (
      <section className="not-found-page">
        Page Not Found
      </section>
    );
  }

});

module.exports = React.createFactory(NotFoundPage);