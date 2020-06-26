import { connect } from 'react-redux';
import { getShoppingCart, createActionRemoveFromCart } from '../../../redux/cartRedux';
import { getUserInfo } from '../../../redux/userLoginRedux.js';
import ShoppingCartPage from './ShoppingCartPage';

const mapStateToProps = (state, props) => ({
  cart: getShoppingCart(state, props.id),
  userLogin: getUserInfo(state),
}

);

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(createActionRemoveFromCart(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
