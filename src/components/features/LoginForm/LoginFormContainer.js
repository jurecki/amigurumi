import { connect } from 'react-redux';
import { getAllUser } from '../../../redux/usersRedux';
import {createActionNameLoginUser} from '../../../redux/userLoginRedux';
import LoginForm from './LoginForm';

const mapStateToProps = (state, props) => (
  {
    user: getAllUser(state),
  }
);

const mapDispatchToProps = dispatch => ({
  userLogin: user => dispatch((createActionNameLoginUser(user))),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
