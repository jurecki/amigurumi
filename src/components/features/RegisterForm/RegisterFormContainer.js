import { connect } from 'react-redux';
import { addUser } from '../../../redux/usersRedux';
import RegisterForm from './RegisterForm';

const mapDispatchToProps = dispatch => ({
  addUser: data => dispatch(addUser(data)),
});


export default connect(null, mapDispatchToProps)(RegisterForm);
