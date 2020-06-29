const initialState = {
  categories: [],
  products: [],
  cart: {
    cartItems: [],
    shipping: {},
    payment: {},
  },

  users: {
    userInfo: [
      {
        id: 'ldad1',
        firstName: 'Paweł',
        lastName: 'Jurecki',
        email: 'jurecki.pawel@gmail.com',
        password: '123',
      },
      {
        id: 'ldad1231231',
        firstName: 'Tomek',
        lastName: 'Kowalski',
        email: 'pawel@gmail.com',
        password: '123',
      },
    ],
  },

  requests: [],

};

export default initialState;
