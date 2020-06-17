import React from 'react';
import styles from './ProductSearch.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const ProductSearch = () => {
  return (
    <form action='' className={styles.root}>
      <div className={styles.searchField}>
        <input placeholder='Search product....' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default ProductSearch;
