import { connect } from 'react-redux';
import { removeCartFormLocalStorage, changeProductQty } from '../../../redux/cartRedux';
import { loadUser } from '../../../redux/usersRedux.js';
import ShoppingCartPage from './ShoppingCartPage';

const mapStateToProps = (state, props) => ({
  user: loadUser(state),
}

);

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => removeCartFormLocalStorage(id),
  changeProductQty: (action, id) => changeProductQty(action, id),
});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
