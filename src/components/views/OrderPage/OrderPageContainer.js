import { connect } from 'react-redux';
import { getOrders, getOrderById } from '../../../redux/orderRedux';
import OrderPage from './OrderPage';

const mapStateToProps = (state, props) => ({
  order: getOrders(state),
}

);

const mapDispatchToProps = dispatch => ({
  loadOrderById: (id) => dispatch(getOrderById(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
