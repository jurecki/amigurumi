import { connect } from 'react-redux';
import { getUserById } from '../../../redux/usersRedux';
import LoginForm from './LoginForm';

const mapStateToProps = (state, props) => (
  {
    user: getUserById(state),
  }
);

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
