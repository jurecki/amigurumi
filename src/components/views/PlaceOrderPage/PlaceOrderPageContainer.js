import { connect } from 'react-redux';
import { getShoppingCart } from '../../../redux/cartRedux';
import PlaceOrderPage from './PlaceOrderPage';
import { addOrderRequest } from '../../../redux/orderRedux';
import { getUserInfo } from '../../../redux/userLoginRedux.js';

const mapStateToProps = (state, props) => ({
  cart: getShoppingCart(state, props.id),
  userLogin: getUserInfo(state),
}

);

const mapDispatchToProps = dispatch => ({
  createOrder: (items, shipping, payment, shippingPrice, totalPrice, userLogin, id) => dispatch(addOrderRequest({ items, shipping, payment, shippingPrice, totalPrice, userLogin, id })),
});


export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrderPage);
