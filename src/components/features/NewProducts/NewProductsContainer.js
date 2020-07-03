import { connect } from 'react-redux';
import NewProducts from './NewProducts';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getProducts } from '../../../redux/productsRedux.js';


const mapStateToProps = state => ({
  categories: getAll(state),
  products: getProducts(state),
});


export default connect(mapStateToProps)(NewProducts);
