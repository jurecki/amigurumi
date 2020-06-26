import React from 'react';
import styles from './Header.module.scss';

import TopBar from '../TopBar/TopBarConainer';
import CompanyClaim from '../CompanyClaim/CompanyClaim';
import MenuBar from '../MenuBar/MenuBar';

const Header = () => (
  <header className={styles.root}>
    <TopBar />
    <CompanyClaim />
    <MenuBar />
  </header>
);

export default Header;
