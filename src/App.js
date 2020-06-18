import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path={'/'} component={Homepage} />
              <Route exact path={'/shop'} component={ProductList} />
              <Route exact path={'/product'} component={ProductPage} />
              <Route exact path={'/register'} component={RegisterPage} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
