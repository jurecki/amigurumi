import React from 'react';
import styles from './MenuBar.module.scss';
import ProductSearch from '../../features/ProductSearch/ProductSearch';

const MenuBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-item-center'>
        <div className='col'>
          <ProductSearch />
        </div>
        <div className={`col-auto ${styles.menu}`} >
          <ul>
            <li>
              <a href='#' className={styles.active} >Home</a>
            </li>
            <li>
              <a href='#'>Kategoria 1</a>
            </li>
            <li>
              <a href='#'>Kategoria 2</a>
            </li>
            <li>
              <a href='#'>Kategoria 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default MenuBar;
