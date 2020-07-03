import { connect } from 'react-redux';
import { getOrderByUser, getOrders } from '../../../redux/orderRedux';
import OrdersList from './OrdersList';

const mapStateToProps = (state, props) => ({
  orders: getOrders(state),
});

const mapDispatchToProps = dispatch => ({
  loadOrdersByUser: (id) => dispatch(getOrderByUser(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);
