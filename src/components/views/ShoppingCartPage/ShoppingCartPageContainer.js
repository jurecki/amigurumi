import { connect } from 'react-redux';
import { getShoppingCart, removeCartFormLocalStorage } from '../../../redux/cartRedux';
import { loadUser } from '../../../redux/usersRedux.js';
import ShoppingCartPage from './ShoppingCartPage';

const mapStateToProps = (state, props) => ({
  cart: getShoppingCart(state, props.id),
}

);

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeCartFormLocalStorage(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
