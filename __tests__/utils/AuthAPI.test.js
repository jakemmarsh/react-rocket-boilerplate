'use strict';

import APIUtils    from '../../app/js/utils/APIUtils';
import AuthAPI     from '../../app/js/utils/AuthAPI';
import TestHelpers from '../../utils/TestHelpers';

describe('Util: AuthAPI', function() {

  const user = TestHelpers.fixtures.user;

  it('should make a request to check a user\'s login status', function(done) {
    let path = 'auth/check';

    sandbox.mock(APIUtils).expects('get').withArgs(path);

    AuthAPI.checkLoginStatus();

    done();
  });

  it('should make a request to login a user', function(done) {
    let path = 'auth/login';

    sandbox.mock(APIUtils).expects('post').withArgs(path, user);

    AuthAPI.login(user);

    done();
  });

  it('should make a request to log a user out', function(done) {
    let path = 'auth/logout';

    sandbox.mock(APIUtils).expects('post').withArgs(path);

    AuthAPI.logout();

    done();
  });

});