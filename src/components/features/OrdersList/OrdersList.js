import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OrdersList.module.scss';
import propTypes from 'prop-types';

class OrderList extends React.Component {

  componentDidMount() {
    this.props.loadOrdersByUser(this.props.userId);
  }

  render() {
    const { orders } = this.props;
    return (
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
            {orders.length === 0
              ?
              <tr>
                <td>
                  {/* <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div> */}
                  <div>You do not have any orders</div>
                </td>
              </tr>
              :
              orders.map(order => <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createDate.slice(0, 10)}</td>
                <td>{order.totalPrice}</td>
                <td>PAY NOW</td>
                <td>
                  <Link to={'/order/' + order._id}>DETAILS</Link>
                </td>
              </tr>
              )
            }

          </tbody>
        </table>
      </div>
    );
  }
}

OrderList.propTypes = {
  orders: propTypes.array,
  loadOrdersByUser: propTypes.func,
  userId: propTypes.string,
};

export default OrderList;
