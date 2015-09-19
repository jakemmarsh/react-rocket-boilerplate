'use strict';

import React         from 'react/addons';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

const SearchPage = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <DocumentTitle title="Search">
        <section className="search-page">

          <div>
            Search
          </div>

          <div>
            <Link to="/">Back to Home</Link>
          </div>

        </section>
      </DocumentTitle>
    );
  }

});

export default SearchPage;