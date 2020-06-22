/* selectors */
export const getShoppingCart = ({ cart }) => cart;

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_TO_CART = createActionName('ADD_TO_CART');

// action creators
export const createActionAddToCart = payload => ({ payload, type: ADD_TO_CART });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...statePart,
        cartItems: [...statePart.cartItems, action.payload],
      };
    default:
      return statePart;
  }
}
