/* selectors */
export const getUserInfo = ({userLogin}) => userLogin.userInfo;
// action name creator
const reducerName = 'userLogin';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const LOGIN_USER = createActionName('LOGIN_USER');

// action creators
export const createActionNameLoginUser = payload => ({ payload, type: LOGIN_USER });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...statePart,
        userInfo: action.payload,
      };
    default:
      return statePart;
  }
}
