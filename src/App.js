import React, { Component } from 'react';
import './App.css';
import LoginForm from './modules/login/LoginForm';
import AppInitializer from './modules/AppInitializer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route path="/" component={AppInitializer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
