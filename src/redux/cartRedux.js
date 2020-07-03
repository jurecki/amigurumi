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

/* thunk creators */

export const addCartToStorage = (product, qty) => {

  let cart = [];
  let cartProducts = [];

  cartProducts = JSON.parse(localStorage.getItem('cart'));
  if (cartProducts === null) {
    cart = [{ _id: product._id, name: product.name, image: product.image, price: product.price, qty: qty }];
    localStorage.setItem('cart', JSON.stringify(cart));
  } else {
    cart = JSON.parse(localStorage.getItem('cart'));
    cart.push({ _id: product._id, name: product.name, image: product.image, price: product.price, qty: qty });

    localStorage.setItem('cart', JSON.stringify(cart));

  }

};

export const removeCartFormLocalStorage = (id) => {
  return dispatch => {

    //remove item form LocalStorage
    let cart;
    const cartProducts = JSON.parse(localStorage.getItem('cart'));
    localStorage.removeItem('cart');

    (cartProducts !== null) && (cart = cartProducts.filter(item => item._id !== id));

    localStorage.setItem('cart', JSON.stringify(cart));

    //remove item form state
    dispatch(createActionRemoveFromCart(id));
  };
};


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...statePart,
        cartItems: [...statePart.cartItems, action.payload],
      };
    case REMOVE_FROM_CART: {
      let cartItems = statePart.cartItems.filter(item => item._id !== action.payload);
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
