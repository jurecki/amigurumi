import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShoppingCartPage.module.scss';
import { Link } from 'react-router-dom';

class ShoppingCartPage extends React.Component {
  render() {
    console.log(this.props.cart.cartItems.length);
    const { cartItems } = this.props.cart;
    return (
      <div className='container'>
        <div className={styles.cart}>
          <div className={styles.cartList}>
            <ul className={styles.cartListContainer}>
              <li>
                <h3>Shopping Cart </h3>
                <div>Price </div>
              </li>
              {cartItems.length === 0 ?
                <div>
                  Cart is empty
                </div>
                :
                cartItems.map(item =>
                  <li key={item.id}>
                    <div className={styles.cartImage}>
                      <img src={item.image} alt="product" />
                    </div>
                    <div className={styles.cartName}>
                      <div>
                        <Link to={'/product/' + item.product}>
                          {item.name}
                        </Link>

                      </div>
                      <div>
                        Qty:
                        {/* <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                          {[...Array(item.countInStock).keys()].map(x =>
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                          )}
                        </select> */}
                        {/* <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)} >
                          Delete
                    </button> */}
                      </div>
                    </div>
                    <div className={styles.cartPrice}>
                      ${item.price}
                    </div>
                  </li>
                )
              }
            </ul>

          </div >
          {cartItems.length !== 0 &&
            <div className={styles.cartAction}>
              <h3>
                Total ({cartItems.length} products) : {cartItems.name} PLN
              </h3>
              <button className="button primary" disabled={cartItems.length === 0}>
                Proceed to Checkout
              </button>
            </div>
          }
        </div >
      </div >
    );
  }
}

ShoppingCartPage.propTypes = {
  cart: PropTypes.array,
};

export default ShoppingCartPage;
