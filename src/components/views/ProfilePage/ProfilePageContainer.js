import { connect } from 'react-redux';
import { getUserById, loadUser } from '../../../redux/usersRedux';
import { getOrderByUser, getOrders } from '../../../redux/orderRedux';
import ProfilePage from './ProfilePage';

const mapStateToProps = (state, props) => ({
  userInfo: getUserById(state, props.match.params.id),
  orders: getOrders(state),
  user: loadUser(state),
});

const mapDispatchToProps = dispatch => ({
  loadOrdersByUser: (id) => dispatch(getOrderByUser(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
