import { connect } from 'react-redux';
import { getShoppingCart } from '../../../redux/cartRedux';
import PlaceOrderPage from './PlaceOrderPage';
import { addOrderRequest } from '../../../redux/orderRedux';
import { loadUser } from '../../../redux/usersRedux.js';

const mapStateToProps = (state, props) => ({
  cart: getShoppingCart(state, props.id),
  user: loadUser(state),
}

);

const mapDispatchToProps = dispatch => ({
  createOrder: (items, shipping, payment, shippingPrice, totalPrice, userId) => dispatch(addOrderRequest({ items, shipping, payment, shippingPrice, totalPrice, userId })),
});


export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrderPage);
