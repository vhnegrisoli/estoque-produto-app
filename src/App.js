import React, { Component } from 'react';
import './App.css';
import LoginForm from './modules/login/LoginForm';
import AppInitializer from './modules/AppInitializer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import history from './history';
import Security from './modules/auth/Security';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter history={history}>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={AppInitializer}>
              <Link to="/dashboard" />
            </Route>
            <Security />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
