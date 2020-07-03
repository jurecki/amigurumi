import { connect } from 'react-redux';
import { loadUser } from '../../../redux/usersRedux.js';
import TopBar from './TopBar';

const mapStateToProps = state => ({
  user: loadUser(state),
});

// const mapDispatchToProps = dispatch => ({
//   changeCompare: index => dispatch(changeCompare(index)),
//   addFav: number => dispatch(addFavorite(number)),
// });

export default connect(mapStateToProps)(TopBar);
