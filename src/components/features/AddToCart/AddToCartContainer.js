import { connect } from 'react-redux';
import { createActionAddToCart } from '../../../redux/cartRedux';
import AddToCart from './AddToCart';

const mapStateToProps = (state, props) => ({
}

);

const mapDispatchToProps = dispatch => ({
  addToCart: (product, qty) => dispatch(createActionAddToCart(product, qty)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
