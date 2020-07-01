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
  createOrder: (items, shipping, payment, shippingPrice, totalPrice, userLogin) => dispatch(addOrderRequest({ items, shipping, payment, shippingPrice, totalPrice, userLogin })),
});


export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrderPage);
