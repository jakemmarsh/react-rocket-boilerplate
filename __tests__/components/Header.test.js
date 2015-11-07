'use strict';

import React     from 'react';
import TestUtils from 'react-addons-test-utils';

import Header    from '../../app/js/components/Header';

describe('Component: Header', function() {

  it('should render properly', function() {
    const header = TestUtils.renderIntoDocument(
      <Header />
    );

    TestUtils.findRenderedDOMComponentWithTag.bind(null, header, 'header').should.not.throw();
  });

});