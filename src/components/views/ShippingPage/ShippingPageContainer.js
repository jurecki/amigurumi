import { connect } from 'react-redux';
import { createActionSaveShipping } from '../../../redux/cartRedux';
import ShippingPage from './ShippingPage';

const mapStateToProps = (state, props) => ({
}

);

const mapDispatchToProps = dispatch => ({
  saveShipping: data => dispatch(createActionSaveShipping(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ShippingPage);
