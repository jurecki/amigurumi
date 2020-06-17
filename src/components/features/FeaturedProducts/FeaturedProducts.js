import React from 'react';
import styles from './FeaturedProducts.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const FeaturedProducts = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>

          <div className={styles.shopNow}>
            <img src='https://image.shutterstock.com/z/stock-photo-handmade-knitted-toys-amigurumi-toys-crochet-stuffed-animals-bunnies-and-penguin-miniature-1405761665.jpg' alt='photo' />
            <div className={styles.buttons}>
              <Button variant='white'>KUP TERAZ</Button>
            </div>
          </div>

          <div className={styles.arrowWrapper}>
            <Button
              variant='arrow'
            >
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
            <Button
              variant='arrow'
            >
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
