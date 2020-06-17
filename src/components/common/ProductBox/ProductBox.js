import React from 'react';
import styles from './ProductBox.module.scss';

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
          ACTION
        </div>
      </div>
    );
  }
}

export default ProductBox;
