import React from 'react';
import styles from './Homepage.module.scss';

import FuturedProducts from '../../features/FeaturedProducts/FeaturedProducts';
import NewProducts from '../../features/NewProducts/NewProducts';

const Homepage = () => (
  <div className={styles.root}>
    <FuturedProducts />
    <NewProducts />
  </div>
);

export default Homepage;
