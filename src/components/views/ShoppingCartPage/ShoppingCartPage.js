import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShoppingCartPage.module.scss';
import { Link, withRouter } from 'react-router-dom';
import AddToCart from '../../features/AddToCart/AddToCartContainer';

class ShoppingCartPage extends React.Component {

  removeFromCart = (id) => {
    this.props.removeFromCart(id);
    this.forceUpdate();
  }

  productQty = (e,action, id) => {
    e.preventDefault();
    this.props.changeProductQty(action, id);
  }

  checkoutHandler = () => {
    console.log('userLogin', this.props.user);
    if (this.props.user === undefined) {
      this.props.history.push('/login');
    } else this.props.history.push('/shipping');
  }

  render() {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
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
                  <li key={item._id}>
                    <div className={styles.cartImage}>
                      <img src={item.image} alt="product" />
                    </div>
                    <div className={styles.cartName}>
                      <div>
                        <Link to={'/product/' + item._id}>
                          {item.name}
                        </Link>
                      </div>
                      <div>

                        Quantity:
                        <button onClick={(e) => this.productQty(e, 'increase', item._id)}>+</button>
                        <button onClick={(e) => this.productQty(e, 'decrease', item._id)}>-</button>

                        <AddToCart product={cartItems} btn='hidden1' counter='' value={item.qty} />

                        <button type="button" className={styles.button} onClick={this.removeFromCart.bind(this, item._id)} >
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
              <button className={styles.button} disabled={cartItems.length === 0} onClick={this.checkoutHandler}>
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
  removeFromCart: PropTypes.func,
  changeProductQty: PropTypes.func,
  history: PropTypes.object,
  user: PropTypes.array,
};

export default withRouter(ShoppingCartPage);
