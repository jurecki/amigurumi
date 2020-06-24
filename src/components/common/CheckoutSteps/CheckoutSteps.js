import React from 'react';
import styles from './CheckoutSteps.module.scss';
import PropTypes from 'prop-types';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className={styles.chekoutSteps}>
      <div className={step1.split(' ').map((name) => ' ' + (styles[name] || name)).join('')}>Singin</div>
      <div className={step2.split(' ').map((name) => ' ' + (styles[name] || name)).join('')}>Shipping</div>
      <div className={step3.split(' ').map((name) => ' ' + (styles[name] || name)).join('')}>Payment</div>
      <div className={step4.split(' ').map((name) => ' ' + (styles[name] || name)).join('')}>Place Order</div>
    </div>
  );
};

CheckoutSteps.propTypes = {
  step1: PropTypes.string,
  step2: PropTypes.string,
  step3: PropTypes.string,
  step4: PropTypes.string,
};

export default CheckoutSteps;
