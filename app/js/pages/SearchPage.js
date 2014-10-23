/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var SearchPage = React.createClass({

  propTypes: {
    updatePageTitle: React.PropTypes.func
  },

  componentDidMount: function() {
    this.props.updatePageTitle('Search');
  },

  render: function() {
    return (
      <section className="search-page">
        Search
      </section>
    );
  }

});

module.exports = SearchPage;