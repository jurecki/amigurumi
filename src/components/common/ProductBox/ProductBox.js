import React from 'react';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

class ProductBox extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.photo}>
          <img src='https://image.shutterstock.com/image-photo/crocheted-amigurumi-toy-isolated-on-600w-721905301.jpg' alt='product-1'></img>
        </div>
        <div className={styles.content}>
          <h5>CONTENT</h5>
        </div>
        <div className={styles.action}>
          <Button className={styles.priceBtn} noHover variant='small'>
              $ 50
          </Button>
          <Button className={styles.options} variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
    );
  }
}

export default ProductBox;
