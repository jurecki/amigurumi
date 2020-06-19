import React from 'react';
import styles from './MenuBar.module.scss';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { Link } from 'react-router-dom';

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
              <Link to={`${process.env.PUBLIC_URL}/`} className={styles.active} >Home</Link>
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
