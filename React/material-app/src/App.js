import React, { Component } from 'react';
import { createBrowserHistory } from 'history'; 
import { Router, Route, Switch } from 'react-router';
// import logo from './logo.svg';
import './App.css';

import indexRoutes from 'routes/index.jsx';
import 'assets/scss/material-kit-react.css?v=1.1.0';

var hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />;

          })}
        </Switch>
      </Router> 
      );
  }
}


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/

export default App;
