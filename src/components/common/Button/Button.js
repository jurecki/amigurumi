import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, variant }) => {
  const classes = [];

  if (variant) classes.push(styles[variant]);
  else classes.push('main');

  return (
    <a href='#' className={classes.join('')}>
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
