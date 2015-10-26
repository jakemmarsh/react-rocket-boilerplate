'use strict';

import ReactDOM    from 'react-dom';
import TestUtils   from 'react-addons-test-utils';

import TestHelpers from '../../utils/TestHelpers';
import HomePage    from '../../app/js/pages/HomePage';

describe('Page: Home', function() {

  this.timeout(5000);

  beforeEach(function(done) {
    this.container = document.createElement('div');

    TestHelpers.testRouteHandler('/', {}, {}, {}, HomePage, this.container, (component) => {
      this.page = component;
      sandbox.restore();
      done();
    });
  });

  it('should render properly', function() {
    TestUtils.findRenderedDOMComponentWithClass.bind(null, this.page, 'home-page').should.not.throw();
  });

  afterEach(function() {
    if ( this.container ) { ReactDOM.unmountComponentAtNode(this.container); }
  });

});