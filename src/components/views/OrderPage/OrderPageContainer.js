import { connect } from 'react-redux';
import { getOrderById } from '../../../redux/orderRedux';
import OrderPage from './OrderPage';

const mapStateToProps = (state, props) => ({
  order: getOrderById(state, props.match.params.id),
}

);

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
