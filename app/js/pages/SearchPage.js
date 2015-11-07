'use strict';

import React            from 'react';
import {Link}           from 'react-router';
import DocumentTitle    from 'react-document-title';

const propTypes = {
  currentUser: React.PropTypes.object
};

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleQueryChange(evt) {
    this.setState({
      query: evt.target.value
    });
  }

  render() {
    return (
      <DocumentTitle title="Search">
        <section className="search-page">

          <div>
            <h1>Search</h1>

            <h2>Your query: <span ref="queryDisplay">{this.state.query}</span></h2>

            <input type="text" onChange={this.handleQueryChange.bind(this)} ref="searchInput" />
          </div>

          <div>
            <Link to="/">Back to Home</Link>
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

SearchPage.propTypes = propTypes;

export default SearchPage;