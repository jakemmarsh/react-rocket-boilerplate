'use strict';

import ReactDOM    from 'react-dom';
import TestUtils   from 'react-addons-test-utils';

import TestHelpers from '../../utils/TestHelpers';
import SearchPage  from '../../app/js/pages/SearchPage';

describe('Page: Search', function() {

  this.timeout(5000);

  beforeEach(function(done) {
    this.container = document.createElement('div');

    TestHelpers.testRouteHandler('/', {}, {}, {}, SearchPage, this.container, (component) => {
      this.page = component;
      sandbox.restore();
      done();
    });
  });

  it('should render properly', function() {
    TestUtils.findRenderedDOMComponentWithClass.bind(null, this.page, 'search-page').should.not.throw();
  });

  it('should update state on input box change', function() {
    const input = this.page.refs.searchInput;
    const newValue = 'giraffe';

    input.value = newValue;
    TestUtils.Simulate.change(input);

    this.page.state.query.should.eql(newValue);
  });

  it('should render the updated state in the related span', function() {
    const input = this.page.refs.searchInput;
    const span = this.page.refs.queryDisplay;
    const newValue = 'giraffe';

    input.value = newValue;
    TestUtils.Simulate.change(input);

    span.innerHTML.should.eql(newValue);
  });

  afterEach(function() {
    if ( this.container ) { ReactDOM.unmountComponentAtNode(this.container); }
  });

});