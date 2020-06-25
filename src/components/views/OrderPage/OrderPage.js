import React from 'react';
import styles from './OrderPage.module.scss';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class OrderPage extends React.Component {


  render() {
    const { orderDetails } = this.props.order;
    return (
      <div className={styles.root}>
        {console.log('order', this.props.order)}

        <div className='container'>
          <div className={`row ${styles.placeorder}`}>
            <div className={styles.placeorderInfo}>
              <div>
                <h3>
                  Shipping
                </h3>
                <div>
                  {orderDetails.shipping.address}, {orderDetails.shipping.city},
                  {orderDetails.shipping.postalCode}, {orderDetails.shipping.country},
                </div>
                <div>
                  {orderDetails.isDelivered ? 'Delivered at ' + orderDetails.deliveredAt : 'Not Delivered.'}
                </div>
              </div>
              <div>
                <h3>Payment</h3>
                <div>
                  Payment Method: {orderDetails.payment.paymentMethod}
                </div>
                <div>
                  {orderDetails.isPaid ? 'Paid at ' + orderDetails.paidAt : 'Not Paid.'}
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
                    orderDetails.orderItem.map(item =>
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
                  <div>${orderDetails.shippingPrice}</div>
                </li>
                <li>
                  <div>Order Total</div>
                  <div>${orderDetails.totalPrice}</div>
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
  order: propTypes.object,
};

export default OrderPage;
