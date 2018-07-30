/* eslint-disable global-require */
import React from 'react';
import { Route } from 'react-router';
// import App from './modules/App/App';
import MainPage from './modules/MainPage/MainPage';
import LoginPage from './modules/Login/LoginPage';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}


// Added: Serving static files in Express 
// app.use(express.static('assets'))

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
    <Route path="/" component={MainPage}>
      <Route path="login"
             getComponent={(location, callback) => {
              require.ensure([], require => {
                callback(null, require('./modules/Login/LoginPage').default);
              });
             }}
      />
    </Route>
);
