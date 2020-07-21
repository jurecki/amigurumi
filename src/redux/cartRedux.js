/* selectors */
export const getShoppingCart = ({ cart }) => cart;

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

// action types

export const SAVE_SHIPPING = createActionName('SAVE_SHIPPING');
export const SAVE_PAYMENT = createActionName('SAVE_PAYMENT');

// action creators

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
    cartProducts = JSON.parse(localStorage.getItem('cart'));

    //find duplicate object
    let index = cartProducts.findIndex(item => item._id === product._id);

    if (index === -1) {
      // if object dosen't exist add product to the basket
      cartProducts.push({ _id: product._id, name: product.name, image: product.image, price: product.price, qty: qty, notes: '' });
      localStorage.setItem('cart', JSON.stringify(cartProducts));
    }
    else {
      alert('This product has been already added to the basket');
    }
  }

};

export const removeCartFormLocalStorage = (id) => {

  let cart;
  const cartProducts = JSON.parse(localStorage.getItem('cart'));
  localStorage.removeItem('cart');

  (cartProducts !== null) && (cart = cartProducts.filter(item => item._id !== id));

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const changeProductQty = (action, id) => {

  const cartProducts = JSON.parse(localStorage.getItem('cart'));
  localStorage.removeItem('cart');

  cartProducts.forEach(item => {
    if (item._id === id) {
      if (action === 'increase') item.qty++;
      else item.qty--;
    }
  });

  localStorage.setItem('cart', JSON.stringify(cartProducts));
};


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
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
