import React from 'react';
import styles from './OrderPage.module.scss';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class OrderPage extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.loadOrderById(id);
  }

  render() {
    const { shippingAddress, isDelivered, deliveredAt, payment, isPaid, paidAt, orderItem, shippingPrice, totalPrice } = this.props.order[0];
    console.log('oRDER by ID', this.props.order[0]);
    return (
      (this.props.order.length === 0) ?
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        :
        <div className={styles.root}>
          <div className='container'>
            <div className={`row ${styles.placeorder}`}>
              <div className={styles.placeorderInfo}>
                <div>
                  <h3>

                    Shipping
                  </h3>
                  <div>
                    {shippingAddress.address}, {shippingAddress.city},
                    {shippingAddress.postalCode}, {shippingAddress.country},
                  </div>
                  <div>
                    {isDelivered ? 'Delivered at ' + deliveredAt : 'Not Delivered.'}
                  </div>
                </div>
                <div>
                  <h3>Payment</h3>
                  <div>
                    Payment Method: {payment.paymentMethod}
                  </div>
                  <div>
                    {isPaid ? 'Paid at ' + paidAt : 'Not Paid.'}
                  </div>
                </div>
                <div>
                  <ul className={styles.cartListContainer}>
                    <li>
                      <h3>
                        Shopping Cart
                      </h3>
                      <div>
                        Price
                      </div>
                    </li>
                    {
                      orderItem.map(item =>
                        <li key={item.id}>
                          <div className={styles.cartImages}>
                            <img src={item.image} alt='product' />
                          </div>
                          <div className={styles.cartName}>
                            <div>
                              <Link to={'/product/' + item.product}>
                                {item.name}
                              </Link>

                            </div>
                            <div>
                              Qty: {item.qty}
                            </div>
                          </div>
                          <div className={styles.cartPrice}>
                            ${item.price * item.qty}
                          </div>
                        </li>
                      )
                    }
                  </ul>
                </div>


              </div>
              <div className={styles.placeorderAction}>
                <ul>
                  <li>
                    <h3>Order Summary</h3>
                  </li>

                  <li>
                    <div>Shipping</div>
                    <div>${shippingPrice}</div>
                  </li>
                  <li>
                    <div>Order Total</div>
                    <div>${totalPrice}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div >
    );
  }
}

OrderPage.propTypes = {
  order: propTypes.array,
  match: propTypes.object,
  loadOrderById: propTypes.func,
};

export default OrderPage;
