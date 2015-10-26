'use strict';

import request        from 'superagent';
import {camelizeKeys} from 'humps';
import APIUtils       from '../../app/js/utils/APIUtils';

describe('Util: APIUtils', function() {

  it('should normalize the body of a response object with varying keys', function() {
    let testResponse = {
      status: 200,
      body: {
        camel_case: 'test',
        PascalCase: 'test',
        camelCase: 'test'
      }
    };

    APIUtils.normalizeResponse(testResponse).should.eql(camelizeKeys(testResponse.body));
  });

  it('should make a GET request', function() {
    let path = 'auth/check';

    sandbox.mock(request).expects('get').withArgs('http://localhost:3000/api/' + path);

    APIUtils.get(path);
  });

  it('should make a POST request', function() {
    let path = 'auth/login';
    let user = {
      username: 'test',
      password: 'test'
    };

    sandbox.mock(request).expects('post').withArgs('http://localhost:3000/api/' + path, user);

    APIUtils.post(path, user);
  });

  it('should make a PATCH request', function() {
    let path = 'user/1';
    let user = {
      email: 'new@test.com'
    };

    sandbox.mock(request).expects('patch').withArgs('http://localhost:3000/api/' + path, user);

    APIUtils.patch(path, user);
  });

  it('should make a PUT request', function() {
    let path = 'user/1';
    let user = {
      email: 'new@test.com'
    };

    sandbox.mock(request).expects('put').withArgs('http://localhost:3000/api/' + path, user);

    APIUtils.put(path, user);
  });

  it('should make a DEL request', function() {
    let path = 'user/1';

    sandbox.mock(request).expects('del').withArgs('http://localhost:3000/api/' + path);

    APIUtils.del(path);
  });

});