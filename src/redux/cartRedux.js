/* selectors */
export const getShoppingCart = ({ cart }) => cart;

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

// action creators
export const createActionAddToCart = (payload, qty) => ({ payload: { ...payload, qty: qty }, type: ADD_TO_CART });
export const createActionRemoveFromCart = payload => ({ payload, type: REMOVE_FROM_CART });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...statePart,
        cartItems: [...statePart.cartItems, action.payload],
      };
    case REMOVE_FROM_CART: {
      let cartItems = statePart.cartItems.filter(item => item.id !== action.payload);
      return {
        ...statePart,
        cartItems,
      };
    }

    default:
      return statePart;
  }
}
