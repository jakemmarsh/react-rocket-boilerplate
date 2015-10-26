'use strict';

import React            from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import {Link}           from 'react-router';
import DocumentTitle    from 'react-document-title';

const SearchPage = React.createClass({

  mixins: [LinkedStateMixin],

  propTypes: {
    currentUser: React.PropTypes.object
  },

  getInitialState() {
    return {
      query: ''
    };
  },

  render() {
    return (
      <DocumentTitle title="Search">
        <section className="search-page">

          <div>
            <h1>Search</h1>

            <h2>Your query: {this.state.query}</h2>

            <input type="text" valueLink={this.linkState('query')} />
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