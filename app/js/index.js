'use strict';

import React  from 'react/addons';

import Routes from './Routes';

if ( process.env.NODE_ENV !== 'production' ) {
  // Enable React devtools
  window.React = React;
}

React.render(Routes, document.getElementById('app'));