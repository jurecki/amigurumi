import React from 'react';
import styles from './PlaceOrderPage.module.scss';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../../common/CheckoutSteps/CheckoutSteps';

class PlaceOrderPage extends React.Component {

  handleOrder = (e) => {
    e.preventDefault();
    console.log('wyślij na serwer');
  }

  render() {
    const { cart } = this.props;
    const { cartItems } = this.props.cart;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const taxPrice = 0.15 * itemsPrice;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <CheckoutSteps step1={'active'} step2={'active'} step3={'active'} step4={'active'} />
          </div>
          <div className={`row ${styles.placeorder}`}>
            <div className={styles.placeorderInfo}>
              <div>
                <h3>
                  Shipping
                </h3>
                <div>
                  {cart.shipping.address}, {cart.shipping.city},
                  {cart.shipping.postalCode}, {cart.shipping.country},
                </div>
              </div>
              <div>
                <h3>Payment</h3>
                <div>
                  Payment Method: {cart.payment.paymentMethod}
                </div>
              </div>
              <div>
                <ul className={styles.CartListContainer}>
                  <li>
                    <h3>
                      Shopping Cart
                    </h3>
                    <div>
                      Price
                    </div>
                  </li>
                  {
                    cartItems.length === 0 ?
                      <div>
                        Cart is empty
                      </div>
                      :
                      cartItems.map(item =>
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
                            ${item.price}
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
                  <button className="button primary full-width" onClick={this.handleOrder} >Place Order</button>
                </li>
                <li>
                  <h3>Order Summary</h3>
                </li>
                <li>
                  <div>Items</div>
                  <div>${itemsPrice}</div>
                </li>
                <li>
                  <div>Shipping</div>
                  <div>${shippingPrice}</div>
                </li>
                <li>
                  <div>Tax</div>
                  <div>${taxPrice}</div>
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

PlaceOrderPage.propTypes = {
  cart: propTypes.object,
};

export default PlaceOrderPage;
