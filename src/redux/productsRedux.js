import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getProducts = ({ products }) => products.data;
export const getProduct = ({ products }, id) => products.data.find(product => product._id === id);

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

// action creators
export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* thunk creators */
export const loadProductsRequest = () => {
  return async dispatch => {

    dispatch(startRequest({ name: LOAD_PRODUCTS }));
    try {
      let res = await axios.get(`${API_URL}/products`);

      dispatch(loadProducts(res.data));
      dispatch(endRequest({ name: LOAD_PRODUCTS }));
    } catch (e) {
      dispatch(errorRequest({ name: LOAD_PRODUCTS, error: e.message }));
    }
  };
};


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case START_REQUEST: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            pending: true,
            error: null,
            success: false,
          },
        },
      };
    }
    case END_REQUEST: {
      return {
        ...statePart,
        requests: {
          ...statePart.requets,
          [action.payload.name]: {
            pending: false,
            error: null,
            success: true,
          },
        },
      };
    }
    case ERROR_REQUEST: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            pending: false,
            error: action.payload.message,
            success: false,
          },
        },
      };
    }
    case LOAD_PRODUCTS: {
      return {
        ...statePart,
        data: [...action.payload],
      };
    }
    default:
      return statePart;
  }
}
