import { connect } from 'react-redux';
import { getUser } from '../../../redux/usersRedux';
import LoginForm from './LoginForm';


const mapDispatchToProps = dispatch => ({
  getUser: (email, password) => dispatch((getUser({ email, password }))),
});


export default connect(null, mapDispatchToProps)(LoginForm);
