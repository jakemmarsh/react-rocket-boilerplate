/**
 * @jsx React.DOM
 */
'use strict';

var React         = require('react/addons');

var DocumentTitle = require('../components/DocumentTitle');

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

        <DocumentTitle title="404: Not Found" />

        Page Not Found

      </section>
    );
  }

});

module.exports = React.createFactory(NotFoundPage);