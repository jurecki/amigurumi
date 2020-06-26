import React from 'react';
import styles from './ProfilePage.module.scss';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

class ProfilePage extends React.Component {


  handleOnSubmit = () => {
    console.log('update userInfo');
  }

  handleLogout = () => {
    console.log('logoutUser');
  }

  render() {
    const {userInfo} = this.props;
    const {orders} = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={styles.profileInfo}>
              <div className="form">
                UserProfle: {userInfo[0].firstName} {userInfo[0].lastName}

                {/* <form onSubmit={this.handleOnSubmit} >
                  <ul className="form-container">
                    <li>
                      <h3>User Profile</h3>
                    </li>
                    <li>
                    </li>
                    <li>
                      <label htmlFor="name">
                        Name
                      </label>
                      <input value={userInfo.firstName} type="name" name="name" id="name" onChange={this.handlerOnChange}>
                      </input>
                    </li>
                    <li>
                      <label htmlFor="email">
                        Email
                      </label>
                      <input value={userInfo.email} type="email" name="email" id="email" onChange={this.handlerOnChange}>
                      </input>
                    </li>
                    <li>
                      <label htmlFor="password">Password</label>
                      <input value={userInfo.password} type="password" id="password" name="password" onChange={this.handlerOnChange}>
                      </input>
                    </li>
                    <li>
                      <button type="submit" className="button primary">Update</button>
                      <button type="button" onClick={this.handleLogout} className="button secondary full-width">Logout</button>
                    </li>

                  </ul>
                </form> */}
              </div>
            </div>

            <div className={styles.profileOrders}>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>

                  {/* {orders.orderItem.map(order => <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.isPaid}</td>
                    <td>
                      <Link to={"/order/" + order._id}>DETAILS</Link>
                    </td>
                  </tr>)} */}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  userInfo: propTypes.node,
  orders: propTypes.node,
};


export default ProfilePage;
