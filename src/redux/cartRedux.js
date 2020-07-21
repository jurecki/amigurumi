import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getShoppingCart = ({ cart }) => cart;

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
export const SAVE_SHIPPING = createActionName('SAVE_SHIPPING');
export const SAVE_PAYMENT = createActionName('SAVE_PAYMENT');

// action creators

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const createActionAddToCart = (payload, qty) => ({ payload: { ...payload, qty: qty }, type: ADD_TO_CART });
// export const createActionRemoveFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const createActionSaveShipping = payload => ({ payload, type: SAVE_SHIPPING });
export const createActionSavePayment = payload => ({ payload, type: SAVE_PAYMENT });

/* thunk creators */

export const addCartToStorage = (product, qty) => {

  let cart = [];
  let cartProducts = [];

  cartProducts = JSON.parse(localStorage.getItem('cart'));
  if (cartProducts === null) {
    cart = [{ _id: product._id, name: product.name, image: product.image, price: product.price, qty: qty }];
    localStorage.setItem('cart', JSON.stringify(cart));
  } else {
    cartProducts = JSON.parse(localStorage.getItem('cart'));

    //find duplicate object
    let index = cartProducts.findIndex(item => item._id === product._id);

    if (index === -1) {
      // if object dosen't exist add product to the basket
      cartProducts.push({ _id: product._id, name: product.name, image: product.image, price: product.price, qty: qty, notes: '' });
      localStorage.setItem('cart', JSON.stringify(cartProducts));
    }
    else {
      alert('This product has been already added to the basket');
    }
  }

};

export const removeCartFormLocalStorage = (id) => {

  let cart;
  const cartProducts = JSON.parse(localStorage.getItem('cart'));
  localStorage.removeItem('cart');

  (cartProducts !== null) && (cart = cartProducts.filter(item => item._id !== id));

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const changeProductQty = (action, id) => {

  const cartProducts = JSON.parse(localStorage.getItem('cart'));
  localStorage.removeItem('cart');

  cartProducts.forEach(item => {
    if (item._id === id) {
      if (action === 'increase') item.qty++;
      else item.qty--;
    }
  });

  localStorage.setItem('cart', JSON.stringify(cartProducts));
};


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...statePart,
        requests: {
          [action.payload.name]: {
            pending: true,
            error: null,
            success: false,
          },
        },
      };
    case END_REQUEST:
      return {
        ...statePart,
        requests: {
          [action.payload.name]: {
            pending: false,
            error: null,
            sucess: true,
          },
        },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        requests: {
          [action.payload.name]: {
            pending: false,
            error: action.payload.message,
            sucess: false,
          },
        },
      };
    case ADD_TO_CART:
      return {
        ...statePart,
        cartItems: [...statePart.cartItems, action.payload],
      };
    // case REMOVE_FROM_CART: {
    //   let cartItems = statePart.cartItems.filter(item => item._id !== action.payload);
    //   return {
    //     ...statePart,
    //     cartItems,
    //   };
    // }
    case SAVE_SHIPPING: {
      return {
        ...statePart,
        shipping: action.payload,
      };
    }
    case SAVE_PAYMENT: {
      return {
        ...statePart,
        payment: action.payload,
      };
    }
    default:
      return statePart;
  }
}
