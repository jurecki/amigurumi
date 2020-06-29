import { connect } from 'react-redux';
import { loadProductsRequest } from './redux/productsRedux';
import App from './App';
import { loadCategoriesRequest } from './redux/categoriesRedux';

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
  loadCategories: () => dispatch(loadCategoriesRequest()),
});

export default connect(null, mapDispatchToProps)(App);
