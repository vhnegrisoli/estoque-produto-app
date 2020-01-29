import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppBar from './../AppBar';
import ProdutoForm from './produto/ProdutoForm';
import Dashboard from './dashboard/Dashboard';

export default class AppInitializer extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <AppBar />
          <Switch>
            <Route path="/dashboard" exact={true} component={Dashboard} />
            <Route path="/produtos/cadastrar" exact={true} component={ProdutoForm} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
