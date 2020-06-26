import React from 'react';
import styles from './TopBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const TopBar = (props) => (
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
          <ul> {props.userLogin ?
            <li>
              <Link to={`${process.env.PUBLIC_URL}/profile/${props.userLogin.id}`}> {props.userLogin.firstName} {props.userLogin.lastName}</Link>
            </li>
            :
            <>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/login`}>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} />Login
                </Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/register`}>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />Register
                </Link>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </a>
              </li>
            </>
          }

          </ul>
        </div>
      </div>
    </div>
  </div >
);

TopBar.propTypes = {
  userLogin: propTypes.node,
};

export default TopBar;
