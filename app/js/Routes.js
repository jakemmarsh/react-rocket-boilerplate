'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';

import App                         from './App';
import HomePage                    from './pages/HomePage';
import SearchPage                  from './pages/SearchPage';
import NotFoundPage                from './pages/NotFoundPage';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <IndexRoute component={HomePage} />

      <Route path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />

      <Route path="*" component={NotFoundPage} />

    </Route>
  </Router>
);
