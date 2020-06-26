import { connect } from 'react-redux';
import { getUserById } from '../../../redux/usersRedux';
import {getOrderByUser} from '../../../redux/orderRedux';
import ProfilePage from './ProfilePage';

const mapStateToProps = (state, props) => ({
  userInfo: getUserById(state, props.match.params.id),
  orders: getOrderByUser(state,props.match.params.id),
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
