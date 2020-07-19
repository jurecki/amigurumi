import { connect } from 'react-redux';
import { getUser, loadUser } from '../../../redux/usersRedux';
import { getShoppingCart } from '../../../redux/cartRedux';
import LoginForm from './LoginForm';

const mapStateToProps = (state, props) => (
  {
    cart: getShoppingCart(state, props.id),
  }
);

const mapDispatchToProps = dispatch => ({
  getUser: (email, password) => dispatch((getUser({ email, password }))),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
