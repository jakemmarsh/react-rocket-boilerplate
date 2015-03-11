'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;

var DocumentTitle = require('../components/DocumentTitle');

var SearchPage = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <section className="search-page">

        <DocumentTitle title="Search" />

        <div>
          Search
        </div>

        <div>
          <Link to="Home">Back to Home</Link>
        </div>

      </section>
    );
  }

});

module.exports = SearchPage;