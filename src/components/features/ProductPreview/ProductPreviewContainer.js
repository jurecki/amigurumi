import { connect } from 'react-redux';
import { getProduct } from '../../../redux/productsRedux';
import { createActionAddToCart } from '../../../redux/cartRedux';
import ProductPreview from './ProductPreview';

const mapStateToProps = (state, props) => ({
  product: getProduct(state, props.id),
}

);

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(createActionAddToCart(product)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductPreview);
