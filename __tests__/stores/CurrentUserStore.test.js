'use strict';

import when               from 'when';

import TestHelpers        from '../../utils/TestHelpers';
import CurrentUserStore   from '../../app/js/stores/CurrentUserStore';
import CurrentUserActions from '../../app/js/actions/CurrentUserActions';
import AuthAPI            from '../../app/js/utils/AuthAPI';

describe('Store: CurrentUser', function() {

  const user = TestHelpers.fixtures.user;

  beforeEach(function() {
    CurrentUserStore.init();
  });

  it('should have correct default values on init', function() {
    Should(CurrentUserStore.user).be.null();
    Should(CurrentUserStore.hasBeenChecked).be.false();
  });

  it('#setUser should save the user and trigger the store', function() {
    const cbSpy = sinon.spy();

    sandbox.mock(CurrentUserStore).expects('trigger').withArgs(null, user).once();
    CurrentUserStore.setUser(user, cbSpy);

    sinon.assert.calledWith(cbSpy, null, user);
  });

  it('#checkLoginStatus should check user\'s login status on action', function() {
    const cbSpy = sinon.spy();

    sandbox.mock(AuthAPI).expects('checkLoginStatus').returns(when(user));

    CurrentUserActions.checkLoginStatus(cbSpy);
    sinon.assert.calledWith(cbSpy, null, user);
  });

  it('#loginUser should log user in on action if API response is successful', function() {
    const cbSpy = sinon.spy();

    sandbox.mock(AuthAPI).expects('login').withArgs(user).returns(when(user));
    sandbox.mock(CurrentUserStore).expects('trigger').withArgs(null, user).once();

    CurrentUserActions.login(user, cbSpy);
    sinon.assert.calledWith(cbSpy, null, user);
  });

  it('#logoutUser should log user out on action', function() {
    const cbSpy = sinon.spy();

    sandbox.mock(CurrentUserStore).expects('trigger').withArgs(null, null).once();
    sandbox.mock(AuthAPI).expects('logout').once().returns(when());

    CurrentUserActions.logout(cbSpy);
    sinon.assert.calledWith(cbSpy, null, null);
  });

});