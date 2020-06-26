import { combineReducers, createStore } from 'redux';
import initialState from './initialState';
import categoriesRedux from './categoriesRedux';
import productsRedux from './productsRedux';
import usersRedux from './usersRedux';
import cartRedux from './cartRedux';
import orderRedux from './orderRedux';
import userLoginRedux from './userLoginRedux';
//define reducer
const reducers = {
  categories: categoriesRedux,
  products: productsRedux,
  users: usersRedux,
  cart: cartRedux,
  order: orderRedux,
  userLogin: userLoginRedux,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
