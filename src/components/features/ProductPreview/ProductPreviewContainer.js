import { connect } from 'react-redux';
import { getProduct } from '../../../redux/productsRedux';
import ProductPreview from './ProductPreview';

const mapStateToProps = (state, props) => ({
  product: getProduct(state, props.id),
}

);

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductPreview);
