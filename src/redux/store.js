import { combineReducers, createStore, applyMiddleware } from 'redux';
import initialState from './initialState';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
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
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
