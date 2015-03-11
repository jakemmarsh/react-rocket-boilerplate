'use strict';

var React         = require('react/addons');

var DocumentTitle = require('../components/DocumentTitle');

var NotFoundPage = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired
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