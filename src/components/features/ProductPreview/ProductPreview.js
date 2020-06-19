import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './ProductPreview.module.scss';

const ProductPreview = ({ product }) => {

  const { name, describe, image } = product;
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
                <div className={styles.productDescriptionShort}>
                  {describe}
                </div>
                <hr />
                <div className={styles.productAction}>
                  DODAJ DO KOSZYKA NOWY KOMPONENT
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
};

ProductPreview.propTypes = {
  product: PropTypes.object,
};

export default ProductPreview;
