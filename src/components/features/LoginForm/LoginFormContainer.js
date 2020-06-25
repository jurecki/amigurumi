import { connect } from 'react-redux';
import { getUserById } from '../../../redux/usersRedux';
import LoginForm from './LoginForm';

const mapStateToProps = (state, props) => (
  console.log('props', props)
  //   {
  //   user: getUserById(state, props.email),
  // }
);

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
