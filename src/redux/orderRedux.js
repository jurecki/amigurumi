import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getOrders = ({ orders }) => orders.data || [];

// action name creator
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const ADD_ORDER = createActionName('ADD_ORDER');
export const LOAD_ORDER_BY_USER = createActionName('LOAD_ORDER_BY_USER');
export const LOAD_ORDER_BY_ID = createActionName('LOAD_ORDER_BY_ID');

// action creators
export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const addOrder = payload => ({ payload, type: ADD_ORDER });
export const loadOrdersByUser = payload => ({ payload, type: LOAD_ORDER_BY_USER });
export const loadOrderById = payload => ({ payload, type: LOAD_ORDER_BY_ID });
/* thunk creators */

export const addOrderRequest = (data) => {
  return async dispatch => {
    dispatch(startRequest({ name: ADD_ORDER }));
    try {
      console.log('DATA ITEMS IN REDUX', data);
      console.log('DATA SHIPPING IN REDUX', data.shipping);

      let res = await axios.post(`${API_URL}/orders`, data);

      dispatch(addOrder(res.data));
      dispatch(endRequest({ name: ADD_ORDER }));
    } catch (e) {
      dispatch(errorRequest({ name: ADD_ORDER, error: e.message }));
    }
  };
};

export const getOrderByUser = (id) => {
  return async dispatch => {
    dispatch(startRequest({ name: LOAD_ORDER_BY_USER }));
    try {
      let res = await axios.get(`${API_URL}/orders/user/${id}`);
      dispatch(loadOrdersByUser(res.data));
      dispatch(endRequest({ name: LOAD_ORDER_BY_USER }));
    } catch (e) {
      dispatch(errorRequest({ name: LOAD_ORDER_BY_USER, error: e.message }));
    }
  };
};

export const getOrderById = (id) => {
  return async dispatch => {
    dispatch(startRequest({ name: LOAD_ORDER_BY_ID }));
    try {
      let res = await axios.get(`${API_URL}/orders/${id}`);
      dispatch(loadOrderById(res.data));
      dispatch(endRequest({ name: LOAD_ORDER_BY_ID }));
    } catch (e) {
      dispatch(errorRequest({ name: LOAD_ORDER_BY_ID, error: e.message }));
    }
  };
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
    case ADD_ORDER:
      return {
        ...statePart,
        data: [action.payload],
      };
    case LOAD_ORDER_BY_USER:
      return {
        ...statePart,
        data: action.payload,
      };
    case LOAD_ORDER_BY_ID:
      return {
        ...statePart,
        data: [action.payload],
      };

    default:
      return statePart;
  }
}
