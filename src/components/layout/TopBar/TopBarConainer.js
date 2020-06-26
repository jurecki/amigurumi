import { connect } from 'react-redux';
import { getUserInfo } from '../../../redux/userLoginRedux.js';
import TopBar from './TopBar';

const mapStateToProps = state => ({
  userLogin: getUserInfo(state),
});

// const mapDispatchToProps = dispatch => ({
//   changeCompare: index => dispatch(changeCompare(index)),
//   addFav: number => dispatch(addFavorite(number)),
// });

export default connect(mapStateToProps)(TopBar);
