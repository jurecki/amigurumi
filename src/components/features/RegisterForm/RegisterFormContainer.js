import { connect } from 'react-redux';
import { addUserRegister } from '../../../redux/usersRedux';
import RegisterForm from './RegisterForm';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  addUser: data => dispatch(addUserRegister(data)),
});


export default connect(null, mapDispatchToProps)(RegisterForm);
