import { connect } from 'react-redux';
import { getShoppingCart } from '../../../redux/cartRedux';
import PlaceOrderPage from './PlaceOrderPage';

const mapStateToProps = (state, props) => ({
  cart: getShoppingCart(state, props.id),
}

);

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrderPage);
