/* selectors */
export const getShoppingCart = ({ cart }) => cart;

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
export const SAVE_SHIPPING = createActionName('SAVE_SHIPPING');
export const SAVE_PAYMENT = createActionName('SAVE_PAYMENT');
// action creators
export const createActionAddToCart = (payload, qty) => ({ payload: { ...payload, qty: qty }, type: ADD_TO_CART });
export const createActionRemoveFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const createActionSaveShipping = payload => ({ payload, type: SAVE_SHIPPING });
export const createActionSavePayment = payload => ({ payload, type: SAVE_PAYMENT });

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
