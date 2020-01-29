import React from 'react';
import './App.css';
import ProdutoForm from './modules/produto/ProdutoForm';
import LoginForm from './modules/login/LoginForm';
import Dashboard from './modules/dashboard/Dashboard';
import AppBar from './AppBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Switch>
        <Route path="/" exact={true} component={Dashboard} />
        <Route path="/produtos" exact={true} component={ProdutoForm} />
        <Route path="/login" exact={true} component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
