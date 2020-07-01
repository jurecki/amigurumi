import React from 'react';
import styles from './CompanyClaim.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CompanyClaim = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className={`col-12 order-3 text-right col-md-4 text-md-left order-md-1 ${styles.phoneNumber}`}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faPhoneAlt} />
            +48 606-606-606
          </p>
        </div>
        <div className={`col-6 col-md-3 text-md-center order-md-2 ${styles.logo}`}>
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <FontAwesomeIcon className={styles.icon} icon={faStore} />
          </Link>
        </div>
        <div className={`col text-right order-md-3 ${styles.cart}`}>
          <div className={styles.cartBox}>
            <div className={styles.cartIcon}>
              <Link to={`${process.env.PUBLIC_URL}/cart`}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingCart} />
              </Link>
            </div>
            <div className={styles.cartCounter}>123</div>
          </div>
        </div>
      </div>
    </div>
  </div >
);

export default CompanyClaim;
