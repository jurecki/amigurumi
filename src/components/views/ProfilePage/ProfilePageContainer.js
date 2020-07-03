import { connect } from 'react-redux';
import { loadUser } from '../../../redux/usersRedux';
import { getOrderByUser, getOrders } from '../../../redux/orderRedux';
import ProfilePage from './ProfilePage';

const mapStateToProps = (state, props) => ({
  user: loadUser(state),
  orders: getOrders(state),
  user: loadUser(state),
});

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
