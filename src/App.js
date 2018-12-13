import React, { Component } from 'react';
import Header from './components/Header';
import Main from './pages/main/index';
import Product from './pages/product/index';
import "./styles.css";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
const App = () => (
  <div className="App">
    <Header/>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Main} />
            <Route path="/product/:id" exact={true} component={Product} />
        </Switch>
    </ BrowserRouter>
  </div>
);

export default App;
