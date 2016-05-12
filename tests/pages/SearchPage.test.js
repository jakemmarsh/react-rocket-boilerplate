'use strict';

import TestUtils  from 'react-addons-test-utils';

import SearchPage from '../../app/js/pages/SearchPage';

describe('Page: Search', function() {

  let rendered;
  let props;

  function renderComponent() {
    rendered = TestUtils.renderIntoDocument(
      <SearchPage {...props} />
    );
  }

  beforeEach(function() {
    props = {};
    renderComponent();
  });

  it('should render properly', function() {
    TestUtils.findRenderedDOMComponentWithClass.bind(null, rendered, 'search-page').should.not.throw();
  });

  it('should update state on input box change', function() {
    const input = rendered.refs.searchInput;
    const newValue = 'giraffe';

    input.value = newValue;
    TestUtils.Simulate.change(input);

    rendered.state.query.should.eql(newValue);
  });

  it('should render the updated state in the related span', function() {
    const input = rendered.refs.searchInput;
    const span = rendered.refs.queryDisplay;
    const newValue = 'giraffe';

    input.value = newValue;
    TestUtils.Simulate.change(input);

    assert.strictEqual(span.textContent, newValue);
  });

});
