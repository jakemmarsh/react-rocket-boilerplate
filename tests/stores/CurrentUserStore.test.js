'use strict';

import TestHelpers        from '../../utils/testHelpers';
import CurrentUserStore   from '../../app/js/stores/CurrentUserStore';
import CurrentUserActions from '../../app/js/actions/CurrentUserActions';
import AuthAPI            from '../../app/js/utils/AuthAPI';

describe('Store: CurrentUser', function() {

  const USER = TestHelpers.fixtures.user;

  it('#setUser should set this.user and trigger the store', function() {
    sandbox.stub(CurrentUserStore, 'trigger');

    CurrentUserStore.setUser(USER);

    sinon.assert.calledOnce(CurrentUserStore.trigger);
    sinon.assert.calledWith(CurrentUserStore.trigger, null, USER);
  });

  it('#throwError should trigger the store', function() {
    const err = { message: 'Test error' };

    sandbox.stub(CurrentUserStore, 'trigger');

    CurrentUserStore.throwError(err);

    sinon.assert.calledOnce(CurrentUserStore.trigger);
    sinon.assert.calledWith(CurrentUserStore.trigger, err);
  });

  it('#checkLoginStatus should check user\'s login status on action', function() {
    sandbox.stub(AuthAPI, 'checkLoginStatus').returns(Promise.resolve(USER));
    sandbox.stub(CurrentUserStore, 'setUser');

    CurrentUserActions.checkLoginStatus();

    sinon.assert.calledOnce(AuthAPI.checkLoginStatus);
    sinon.assert.calledOnce(CurrentUserStore.setUser);
    sinon.assert.calledWith(CurrentUserStore.setUser, USER);
  });

  it('#loginUser should log user in on action if API response is successful', function() {
    sandbox.stub(AuthAPI, 'login').returns(Promise.resolve(USER));
    sandbox.stub(CurrentUserStore, 'setUser');

    CurrentUserActions.login(USER);

    sinon.assert.calledOnce(AuthAPI.login);
    sinon.assert.calledWith(AuthAPI.login, USER);
    sinon.assert.calledOnce(CurrentUserStore.setUser);
    sinon.assert.calledWith(CurrentUserStore.setUser, USER);
  });

  it('#logoutUser should log user out on action', function() {
    sandbox.stub(AuthAPI, 'logout').returns(Promise.resolve());
    sandbox.stub(CurrentUserStore, 'setUser');

    CurrentUserActions.logout();

    sinon.assert.calledOnce(AuthAPI.logout);
    sinon.assert.calledOnce(CurrentUserStore.setUser);
    sinon.assert.calledWith(CurrentUserStore.setUser, null);
  });

});
