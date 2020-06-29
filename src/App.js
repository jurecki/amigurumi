import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import ShoppingCartPage from './components/views/ShoppingCartPage/ShoppingCartPageContainer';
import ShippingPage from './components/views/ShippingPage/ShippingPageContainer';
import PaymentPage from './components/views/PaymentPage/PaymentPageContainer';
import PlaceOrderPage from './components/views/PlaceOrderPage/PlaceOrderPageContainer';
import OrderPage from './components/views/OrderPage/OrderPageContainer';
import ProfilePage from './components/views/ProfilePage/ProfilePageContainer';


class App extends Component {

  componentDidMount() {
    const { loadCategories, loadProducts, } = this.props;
    loadCategories();
    loadProducts();
  }

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact={true} path={'/'} component={Homepage} />
          <Route path={'/shop'} component={ProductList} />
          <Route path={'/product/:id'} component={ProductPage} />
          <Route path={'/register'} component={RegisterPage} />
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/cart/:id?'} component={ShoppingCartPage} />
          <Route path={'/shipping'} component={ShippingPage} />
          <Route path={'/payment'} component={PaymentPage} />
          <Route path={'/placeorder'} component={PlaceOrderPage} />
          <Route path={'/order/:id'} component={OrderPage} />
          <Route path={'/profile/:id'} component={ProfilePage} />
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
