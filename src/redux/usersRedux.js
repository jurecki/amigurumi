import shortid from 'shortid';
/* selectors */
export const getUserById = ({ users }, email) => users.filter(user => user.email === email);

// action name creator
const reducerName = 'users';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_USER = createActionName('ADD_USER');

// action creators
export const addUserRegister = payload => ({ payload: { id: shortid.generate(), ...payload }, type: ADD_USER });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_USER:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
