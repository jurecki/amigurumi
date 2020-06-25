import { connect } from 'react-redux';
import { getShoppingCart } from '../../../redux/cartRedux';
import PlaceOrderPage from './PlaceOrderPage';
import { createActionCreateOrder } from '../../../redux/orderRedux';
const mapStateToProps = (state, props) => ({
  cart: getShoppingCart(state, props.id),
}

);

const mapDispatchToProps = dispatch => ({
  createOrder: (items, shipping, payment, shippingPrice, totalPrice, id) => dispatch(createActionCreateOrder(items, shipping, payment, shippingPrice, totalPrice, id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrderPage);
