import React from 'react';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class ProductBox extends React.Component {

  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <div className={styles.root} >
        <div className={styles.photo}>
          <img src={product.image} alt={product.name}></img>
        </div>
        <div className={styles.content}>
          <h5>{product.name}</h5>
        </div>
        <div className={styles.action}>
          <Button className={styles.priceBtn} noHover variant='small'>
            {product.price} PLN
          </Button>
          <Button className={styles.options} variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div >
    );
  }
}

ProductBox.propTypes = {
  product: PropTypes.array,
};

export default ProductBox;
