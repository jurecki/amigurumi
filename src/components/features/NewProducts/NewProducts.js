import React from 'react';
import styles from './NewProducts.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import PropTypes from 'prop-types';

class NewProducts extends React.Component {

  render() {
    const { products } = this.props;

    return (

      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row'>
              <h3>New Products</h3>
            </div>
            <div className='row'>
              {/* if products don't load show spinner */}
              {products === undefined
                ?
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                :
                products.map(product => <div key={product._id} className='col-sm-6 col-md-6 col-lg-4 col-xl-3'> <ProductBox product={product} /> </div>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


NewProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      describe: PropTypes.string,
      image: PropTypes.string,
    })),
};

export default NewProducts;
