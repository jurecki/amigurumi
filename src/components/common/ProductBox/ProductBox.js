import React from 'react';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import AddToCart from '../../features/AddToCart/AddToCartContainer';

class ProductBox extends React.Component {

  render() {
    const { product } = this.props;
    return (
      <div className={styles.root} >
        <div className={styles.photo}>
          <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}><img src={product.image} alt={product.name}></img></Link>
        </div>
        <div className={styles.content}>
          <h5>{product.name}</h5>
        </div>
        <div className={styles.action}>
          <Button className={styles.priceBtn} noHover variant='small'>
            {product.price} PLN
          </Button>
          <div>
            <AddToCart product={product} counter='hidden' btn='' />
          </div>
        </div>
      </div >
    );
  }
}

ProductBox.propTypes = {
  product: PropTypes.object,
};

export default ProductBox;
