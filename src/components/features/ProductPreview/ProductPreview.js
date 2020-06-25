import React from 'react';
import propTypes from 'prop-types';
import styles from './ProductPreview.module.scss';
import AddToCart from '../AddToCart/AddToCartContainer';

class ProductPreview extends React.Component {

  render() {
    const { name, describe, image, price } = this.props.product;
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
                    <span>Price: </span> {price} PLN
                    <hr />
                  </div>
                  <div className={styles.productDescriptionShort}>
                    {describe}
                  </div>
                  <hr />
                  <div className={styles.productAction}>
                    <div className='row'>
                      <AddToCart product={this.props.product} btn='' counter='' />
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
      </div>
    );
  }
}

ProductPreview.propTypes = {
  product: propTypes.object,

};

export default ProductPreview;
