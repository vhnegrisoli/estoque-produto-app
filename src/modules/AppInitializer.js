import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppBar from './../AppBar';
import ProdutoForm from './produto/ProdutoForm';
import ProdutoList from './produto/ProdutoList';
import Dashboard from './dashboard/Dashboard';
import Security from './auth/Security';
export default class AppInitializer extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <AppBar />
          <Switch>
            <Route path="/dashboard" exact={true} component={Dashboard} />
            <Route path="/produtos/cadastrar" exact={true} component={ProdutoForm} />
            <Route path="/produtos/listar" exact={true} component={ProdutoList} />
          </Switch>
          <Security />
        </BrowserRouter>
      </div>
    );
  }
}
