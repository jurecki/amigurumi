import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MainLayout>
            <Switch>
              <Route exact path={'/'} component={Homepage} />
              <Route exact path={'/shop'} component={ProductList} />
              <Route exact path={'/product'} component={ProductPage} />
            </Switch>
          </MainLayout>
        </Router>
      </Provider>

    );
  }
}

export default App;
