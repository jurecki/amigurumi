import React from 'react';
import styles from './TopBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col text-left ${styles.topLeft}`} >
          <ul>
            <li> PLN <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              <ul>
                <li>
                  <a href='#'>USD</a>
                </li>
                <li>
                  <a href='#'>EURO</a>
                </li>
              </ul>
            </li>
            <li>Polski <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              <ul>
                <li>
                  <a href='#'>English</a>
                </li>
                <li>
                  <a href='#'>Deutsch</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={`col text-right ${styles.topRight}`}>
          <ul>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />Login
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faLock} />Register
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div >
);

export default TopBar;