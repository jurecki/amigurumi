import { connect } from 'react-redux';
import { getOrder } from '../../../redux/orderRedux';
import OrderPage from './OrderPage';

const mapStateToProps = (state, props) => ({
  order: getOrder(state),
}

);

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
