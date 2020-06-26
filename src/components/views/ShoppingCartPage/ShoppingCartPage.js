import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShoppingCartPage.module.scss';
import { Link, withRouter } from 'react-router-dom';
import AddToCart from '../../features/AddToCart/AddToCartContainer';

class ShoppingCartPage extends React.Component {

  removeFromCart = (id) => {
    console.log('remove', id);
    this.props.removeFromCart(id);
  }

  checkoutHandler = () => {
    console.log('userLogin', this.props.userLogin);
    if (this.props.userLogin === undefined) {
      this.props.history.push('/login');
    } else this.props.history.push('/shipping');
  }

  render() {
    console.log(this.props.cart.cartItems);
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
                        <Link to={'/product/' + item.id}>
                          {item.name}
                        </Link>
                      </div>
                      <div>

                        Quantity: <AddToCart product={cartItems} btn='hidden' counter='' value={item.qty} />
                        {console.log('ilosc', item.qty)}
                        <button type="button" className="button" onClick={this.removeFromCart.bind(this, item.id)} >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className={styles.cartPrice}>
                      ${item.price * item.qty}
                    </div>
                  </li>
                )
              }
            </ul>

          </div >
          {cartItems.length !== 0 &&
            <div className={styles.cartAction}>
              <h3>
                Total ({cartItems.length} products) : {cartItems.reduce((previousScore, currentScore, index) => previousScore + currentScore.price * currentScore.qty, 0)} PLN
              </h3>
              <button className="button primary" disabled={cartItems.length === 0} onClick={this.checkoutHandler}>
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
  cart: PropTypes.object,
  removeFromCart: PropTypes.func,
  history: PropTypes.object,
  userLogin: PropTypes.object,
};

export default withRouter(ShoppingCartPage);
