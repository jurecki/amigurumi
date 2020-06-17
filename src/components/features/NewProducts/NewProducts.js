import React from 'react';
import styles from './NewProducts.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';


class NewProducts extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row'>
              <h3>New Products</h3>
            </div>
            <div clasName='row'>
              <div className='col-12 col-lg-3'>
                <ProductBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProducts;
