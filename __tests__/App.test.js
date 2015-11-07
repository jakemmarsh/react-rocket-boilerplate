'use strict';

import React              from 'react';
import TestUtils          from 'react-addons-test-utils';

import App                from '../app/js/App';
import CurrentUserStore   from '../app/js/stores/CurrentUserStore';
import CurrentUserActions from '../app/js/actions/CurrentUserActions';
import {ListenerMixin}    from 'reflux';
import TestHelpers        from '../utils/TestHelpers';

describe('App', function() {

  it('#componentDidMount should listen to the user store and check login status', function() {
    sandbox.mock(ListenerMixin).expects('listenTo').withArgs(CurrentUserStore, App._onUserChange).once();
    sandbox.mock(CurrentUserActions).expects('checkLoginStatus').once();

    TestUtils.renderIntoDocument(
      <App params={{}} query={{}}>
        <div />
      </App>
    );
  });

  it('#onUserChange should set the error state if an error is received', function() {
    const err = { message: 'Test error message.' };
    const app = TestUtils.renderIntoDocument(
      <App params={{}} query={{}}>
        <div />
      </App>
    );

    app.onUserChange(err, null);
    app.state.error.should.eql(err);
  });

  it('#onUserChange should set the user state and clear error if a new user is received', function() {
    const user = TestHelpers.fixtures.user;
    const app = TestUtils.renderIntoDocument(
      <App params={{}} query={{}}>
        <div />
      </App>
    );

    app.onUserChange(null, user);
    app.state.currentUser.should.eql(user);
    Should(app.state.error).be.null();
  });

  it('#renderChildren should return all the cloned children', function() {
    const app = TestUtils.renderIntoDocument(
      <App params={{}} query={{}}>
        <div className="test-child" />
      </App>
    );

    TestUtils.findRenderedDOMComponentWithClass(app, 'test-child').should.not.throw();
  });
});