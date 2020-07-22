import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.footerMenu}>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-1 col-sm-6 col-lg-3'>
              <div className={styles.menuWrapper}>
                <h5>Information</h5>
                <ul>
                  <li>
                    <a href='/#'>About us</a>
                  </li>
                  <li>
                    <a href='/#'>Privacy policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xs-1 col-sm-6 col-lg-3'>
              <div className={styles.menuWrapper}>
                <h5>My account</h5>
                <ul>
                  <li>
                    <a href='/#'>Login</a>
                  </li>
                  <li>
                    <a href='/#'>Whish lists</a>
                  </li>
                  <li>
                    <a href='/#'>Orders</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xs-1 col-sm-6 col-lg-3'>
              <div className={styles.menuWrapper}>
                <h5>Products</h5>
                <ul>
                  <li>
                    <a href='/#'>Special offer</a>
                  </li>
                  <li>
                    <a href='/#'>New Products</a>
                  </li>
                  <li>
                    <a href='/#'>Top rated</a>
                  </li>
                  <li>
                    <a href='/#'>Most popular</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-sx-1 col-sm-6 col-lg-3'>
              <div className={styles.menuWrapper}>
                <h5>Details</h5>
                <ul>
                  <li>
                    <a href='/#'>Payment</a>
                  </li>
                  <li>
                    <a href='/#'> Shipping and Delivery</a>
                  </li>
                  <li>
                    <a href='/#'>Returns</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className='container'>
          <div className={'col text-center order-lg-2 order-md-1 ' + styles.copyright}>
            <p>© Copyright 2020 Jurecki | All Rights Reserved</p>
          </div>
          <div className={'col text-right order-lg-3 order-md-3 ' + styles.socialMedia}>
            <ul>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer >
  );
};


export default Footer;
