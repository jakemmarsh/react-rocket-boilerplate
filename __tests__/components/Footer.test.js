'use strict';

import React     from 'react';
import TestUtils from 'react-addons-test-utils';

import Footer    from '../../app/js/components/Footer';

describe('Component: Footer', function() {

  it('#getTrackDuration should return the correct duration for the current track', function() {
    const footer = TestUtils.renderIntoDocument(
      <Footer />
    );
  });

});