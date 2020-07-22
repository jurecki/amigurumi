import React from 'react';
import styles from './MenuBar.module.scss';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuBar = (props) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-item-center'>
        <div className='col'>
          <div className={styles.productSearch}>
            <ProductSearch />
          </div>
        </div>
        <div className={`col-auto ${styles.menu}`} >
          <ul>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/`} className={styles.active} >Home</Link>
            </li>
            {/* if products don't load show spinner */}
            {props.categories === undefined
              ?
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              :
              props.categories.map(category => <li key={category._id}><a href="/#">{category.name}</a></li>)}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  categories: PropTypes.array,
};

export default MenuBar;
