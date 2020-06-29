import { connect } from 'react-redux';
import NewProducts from './NewProducts';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getProducts } from '../../../redux/productsRedux.js';


const mapStateToProps = state => ({
  categories: getAll(state),
  products: getProducts(state),
});

// const mapDispatchToProps = dispatch => ({
//   changeCompare: index => dispatch(changeCompare(index)),
//   addFav: number => dispatch(addFavorite(number)),
// });

export default connect(mapStateToProps)(NewProducts);
