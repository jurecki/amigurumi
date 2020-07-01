import React from 'react';
import styles from './PlaceOrderPage.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../../common/CheckoutSteps/CheckoutSteps';
import shortid from 'shortid';

class PlaceOrderPage extends React.Component {

  handleOrder = (e, shippingPrice, totalPrice) => {
    e.preventDefault();
    const { cart, userLogin } = this.props;
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const id = shortid.generate();

    this.props.createOrder(cartItems, cart.shipping, cart.payment, shippingPrice, totalPrice, id, userLogin.id);
    this.props.history.push('/order/' + id);
  }

  render() {
    const { cart } = this.props;
    const cartItems = JSON.parse(localStorage.getItem('cart'));

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const taxPrice = 0.19 * itemsPrice;
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
                <li>
                  <button className="button primary full-width" onClick={(e) => this.handleOrder(e, shippingPrice, totalPrice)} >Place Order</button>
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
  cart: PropTypes.object,
  createOrder: PropTypes.func,
  history: PropTypes.object,
  userLogin: PropTypes.object,
};

export default PlaceOrderPage;
