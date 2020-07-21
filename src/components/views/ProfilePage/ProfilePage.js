import React from 'react';
import styles from './ProfilePage.module.scss';
import propTypes from 'prop-types';
import OrderList from '../../features/OrdersList/OrdersListContainer';

class ProfilePage extends React.Component {


  handleOnSubmit = () => {
    console.log('update userInfo');
  }

  handleLogout = () => {
    console.log('logoutUser');
  }

  render() {
    const { user } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={styles.profileInfo}>
              <div className="form">

                Hello: {user[0].firstName} {user[0].lastName}

              </div>
            </div>
            <OrderList userId={user[0]._id} />
          </div>
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  user: propTypes.array,
  loadOrdersByUser: propTypes.func,
  match: propTypes.object,
  orders: propTypes.array,
};


export default ProfilePage;
