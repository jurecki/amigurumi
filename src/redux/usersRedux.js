/* selectors */
export const getNew = ({ products }) => products;


// action name creator
const reducerName = 'users';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_USER = createActionName('ADD_USER');

// action creators
export const addUserRequest = payload => ({ payload, type: ADD_USER });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_USER:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
