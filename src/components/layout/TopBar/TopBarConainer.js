import { connect } from 'react-redux';
import { loadUser } from '../../../redux/usersRedux.js';
import TopBar from './TopBar';

const mapStateToProps = state => ({
  user: loadUser(state),
});


export default connect(mapStateToProps)(TopBar);
