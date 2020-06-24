import { connect } from 'react-redux';
import { createActionSavePayment } from '../../../redux/cartRedux';
import PaymentPage from './PaymentPage';

const mapStateToProps = (state, props) => ({
}

);

const mapDispatchToProps = dispatch => ({
  savePaymentMethod: data => dispatch(createActionSavePayment(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
