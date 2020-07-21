import { connect } from 'react-redux';
import { loadUser } from '../../../redux/usersRedux';
import ProfilePage from './ProfilePage';

const mapStateToProps = (state, props) => ({
  user: loadUser(state),
});

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
