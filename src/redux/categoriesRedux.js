import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAll = ({ categories }) => categories;

// action name creator
const reducerName = 'categories';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_CATEGORIES = createActionName('LOAD_CATEGORIES');

// action creators
export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const loadCategories = payload => ({ payload, type: LOAD_CATEGORIES });

/* thunk creators */
export const loadCategoriesRequest = () => {
  return async dispatch => {

    dispatch(startRequest({ name: LOAD_CATEGORIES }));
    try {
      let res = await axios.get(`${API_URL}/categories`);

      dispatch(loadCategories(res.data));
      dispatch(endRequest({ name: LOAD_CATEGORIES }));
    } catch (e) {
      dispatch(errorRequest({ name: LOAD_CATEGORIES, error: e.message }));
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
    case LOAD_CATEGORIES: {
      return {
        ...statePart,
        data: [...action.payload],
      };
    }
    default:
      return statePart;
  }
}
