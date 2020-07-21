import { connect } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';
import MenuBar from './MenuBar';

const mapStateToProps = (state) => ({
  categories: getAll(state),
}

);

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
