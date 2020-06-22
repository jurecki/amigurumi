import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './ProductPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { withRouter } from 'react-router-dom';

class ProductPreview extends React.Component {

  state = {
    shoppingCartQtn: 1,
  }


  handleDecrease = (e) => {
    e.preventDefault();
    console.log('remove');
    this.setState({
      shoppingCartQtn: this.state.shoppingCartQtn - 1,
    });
  }

  handleIncrease = (e) => {
    e.preventDefault();
    console.log('add');
    this.setState({
      shoppingCartQtn: this.state.shoppingCartQtn + 1,
    });
  }

  handleAddToCart = (product) => {
    console.log('thisprops', this.props.history.push('/cart'));
    console.log('dodaj do koszyka', this.state.shoppingCartQtn, 'productID:', product);
    this.props.addToCart(product);

  }


  render() {
    const { name, describe, image, price, countInStock } = this.props.product;
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-xs12'>
              <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sx-12'>
                  <img src={image} className='img-fluid' alt={name} />
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sx-12'>
                  <h2> {name}</h2>
                  <hr />
                  <div className={styles.productPrice}>
                    <span>Price: </span> {price * this.state.shoppingCartQtn} PLN
                    <hr />
                  </div>
                  <div className={styles.productDescriptionShort}>
                    {describe}
                  </div>
                  <hr />
                  <div className={styles.productAction}>
                    <div className='row'>
                      <div className={styles.shoppingQty}>
                        <button disabled={this.state.shoppingCartQtn === 1 ? true : false} onClick={this.handleDecrease}>-</button>
                        <span>{this.state.shoppingCartQtn}</span>
                        <button disabled={this.state.shoppingCartQtn >= countInStock} onClick={this.handleIncrease}>+</button>
                      </div>
                      <Button className={styles.options} variant='small' click={this.handleAddToCart.bind(this, this.props.product)}>
                        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
                      </Button>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.productAdditionalInfo}>
                    <div className={styles.socialSharing}>
                      <span>Share</span>
                      <ul>
                        <li>FB</li>
                        <li>TW</li>
                        <li>PINTEREST</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className={styles.moreInfoProduct}>
                    <div className={styles.productDescription}>
                      Opis Producktu
                    </div>
                    <div className={styles.productDetails}>
                      Product details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

ProductPreview.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
  history: PropTypes.node,
};

export default withRouter(ProductPreview);
