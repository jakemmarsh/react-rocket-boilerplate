'use strict';

import React         from 'react/addons';
import DocumentTitle from 'react-document-title';

const NotFoundPage = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <DocumentTitle title="404: Not Found">
        <section className="not-found-page">

          Page Not Found

        </section>
      </DocumentTitle>
    );
  }

});

export default NotFoundPage;