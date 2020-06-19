import React from 'react';
import styles from './ProductPage.module.scss';
import PropTypes from 'prop-types';
import ProductPreview from '../../features/ProductPreview/ProductPreviewContainer';
import { withRouter } from 'react-router-dom';

const ProductPage = ({ match }) => {
  return (
    <div className={styles.root}>
      <ProductPreview id={match.params.id} />
    </div>
  );
};

ProductPage.propTypes = {
  match: PropTypes.object,
};

export default withRouter(ProductPage);
