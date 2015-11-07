'use strict';

import {Router, Route} from 'react-router';
import React           from 'react';
import ReactDOM        from 'react-dom';
import TestUtils       from 'react-addons-test-utils';
import createHistory   from 'history/lib/createMemoryHistory';
import _               from 'lodash';

const testHelpers = {

  fixtures: {
    user: {
      id: 1,
      email: 'test@test.com',
      username: 'test',
      firstName: 'John',
      lastName: 'Doe'
    }
  },

  testRouteHandler(initialPath, params = {}, query = {}, props = {}, routeHandler, container, cb) {
    const fixtures = this.fixtures;

    const ParentComponent = React.createClass({
      propTypes: {
        params: React.PropTypes.object,
        location: React.PropTypes.object,
        children: React.PropTypes.object
      },

      renderChildren() {
        return this.props.children && React.cloneElement(this.props.children, _.merge(props, {
          params: _.merge(this.props.params, params),
          location: _.merge(this.props.location, { query: query }),
          currentUser: fixtures.user
        }));
      },

      render() {
        return this.renderChildren();
      }
    });

    ReactDOM.render((
      <Router history={createHistory(initialPath)}>
        <Route component={ParentComponent}>
          <Route path={initialPath} component={routeHandler} />
        </Route>
      </Router>
    ), container, function() {
      cb(TestUtils.findRenderedComponentWithType(this, routeHandler));
    });
  },

  renderStubbedComponent(Component, props) {
    const StubbedParent = React.createClass({
      childContextTypes: {
        router: React.PropTypes.object
      },

      propTypes: {
        children: React.PropTypes.func
      },

      getChildContext() {
        return {
          router: {
            makePath(pathname, query) { },
            makeHref(pathname, query) { },
            transitionTo(pathname, query, state=null) { },
            replaceWith(pathname, query, state=null) { },
            go(n) { },
            goBack() { },
            goForward() { },
            isActive(pathname, query) { }
          }
        };
      },

      render() {
        return this.props.children();
      }
    });

    return TestUtils.findRenderedComponentWithType(TestUtils.renderIntoDocument(
      <StubbedParent>
        {() => <Component {...props} />}
      </StubbedParent>
    ), Component);
  },

  renderComponentForMixin(Mixin, dependencies, container, cb = function() {}) {
    if ( !_.isArray(dependencies) ) {
      cb = container;
      container = dependencies;
      dependencies = [];
    }

    let Component = React.createClass({
      mixins: [Mixin, {...dependencies}],
      render () { return null; }
    });

    return this.testRouteHandler('/', {}, {}, {}, Component, container, cb);
  },

  createNativeClickEvent() {
    let evt = document.createEvent('HTMLEvents');
    evt.initEvent('click', false, true);

    return evt;
  },

  createNativeMouseEvent(options) {
    let evt = document.createEvent('MouseEvents');
    evt.initEvent(options.action, false, true);

    return evt;
  },

  createNativeKeyboardEvent(options) {
    let evt = document.createEvent('HTMLEvents');
    let keyEvent = options.event || 'keyup';
    evt.which = options.which;
    evt.keycode = options.which;
    evt.initEvent(keyEvent, false, true);

    return evt;
  }

};

export default testHelpers;