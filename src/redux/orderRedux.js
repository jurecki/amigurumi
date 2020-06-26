/* selectors */
export const getOrderById = ({ order }, id) => order.filter(order => order.id === id);
export const getOrderByUser = ({order}) => order;

// action name creator
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CREATE_ORDER = createActionName('CREATE_ORDER');

// action creators
export const createActionCreateOrder = (payload, shipping, payment, shippingPrice, totalPrice, id) => ({ payload: { id, orderItem: payload, shipping: shipping, payment: payment, shippingPrice, totalPrice }, type: CREATE_ORDER });


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CREATE_ORDER:
      return [
        ...statePart, action.payload,
      ];

    default:
      return statePart;
  }
}
