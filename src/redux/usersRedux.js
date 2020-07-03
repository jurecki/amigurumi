import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const loadUser = ({ users }) => users.data;
//export const getUserById = ({ users }, id) => users.userInfo.filter(user => user.id === id);

// action name creator
const reducerName = 'users';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const ADD_USER = createActionName('ADD_USER');
export const LOAD_USER = createActionName('ADD_USER');
export const LOGIN_USER = createActionName('LOGIN_USER');

// action creators
export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const addUserRegister = payload => ({ payload, type: ADD_USER });
export const loadUserById = payload => ({ payload, type: LOAD_USER });
export const loginUser = payload => ({ payload, type: LOGIN_USER });

/* thunk  creators*/

export const addUser = (data) => {
  return async dispatch => {
    dispatch(startRequest({ name: ADD_USER }));
    try {
      console.log('DATA ITEMS IN REDUX', data);

      let res = await axios.post(`${API_URL}/users`, data);
      dispatch(addUserRegister(res.data));
      dispatch(endRequest({ name: ADD_USER }));
    } catch (e) {
      dispatch(errorRequest({ name: ADD_USER }));
    }
  };
};

export const getUser = (data) => {
  return async dispatch => {
    dispatch(startRequest({ name: LOGIN_USER }));
    try {
      let res = await axios.post(`${API_URL}/users/login`, data);
      dispatch(loginUser(res.data));
      dispatch(endRequest({ name: LOAD_USER }));

    } catch (e) {
      dispatch(errorRequest({ name: LOGIN_USER, error: e.message }));
    }
  };
};

export const getUserById = (id) => {
  return async dispatch => {
    dispatch(startRequest({ name: LOAD_USER }));
    try {
      let res = await axios.get(`${API_URL}/profile/${id}`);
      dispatch(loadUserById(res.data));
      dispatch(endRequest({ name: LOAD_USER }));

    } catch (e) {
      dispatch(errorRequest({ name: LOAD_USER, error: e.message }));
    }
  };
};


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...statePart,
        request: {
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
        request: {
          [action.payload.name]: {
            pending: false,
            error: null,
            success: true,
          },
        },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: {
          [action.payload.name]: {
            pending: false,
            error: action.payload.message,
            success: false,
          },
        },
      };
    case ADD_USER:
      return {
        ...statePart,
        data: action.payload,
      };
    case LOAD_USER:
      return {
        ...statePart,
        data: action.payload,
      };
    case LOGIN_USER:
      return {
        ...statePart,
        data: action.payload,
      };
    default:
      return statePart;
  }
}