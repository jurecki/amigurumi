import { connect } from 'react-redux';
import NewProducts from './NewProducts';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';


const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

// const mapDispatchToProps = dispatch => ({
//   changeCompare: index => dispatch(changeCompare(index)),
//   addFav: number => dispatch(addFavorite(number)),
// });

export default connect(mapStateToProps)(NewProducts);
