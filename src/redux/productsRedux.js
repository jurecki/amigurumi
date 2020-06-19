/* selectors */
export const getNew = ({ products }) => products;
export const getProduct = ({ products }, id) => products.find(product => product.id === id);

// action name creator


// action types


// action creators


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {

    default:
      return statePart;
  }
}
