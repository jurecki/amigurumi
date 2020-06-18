import { connect } from 'react-redux';
import { addUserRequest } from '../../../redux/usersRedux';
import RegisterForm from './RegisterForm';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  addUser: data => dispatch(addUserRequest(data)),
});


export default connect(null, mapDispatchToProps)(RegisterForm);
