import React from 'react';
import styles from './TopBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TopBar = (props) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col text-left ${styles.topLeft}`} >
          <ul>
            <li> PLN <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              <ul>
                <li>
                  <a href='/#'>USD</a>
                </li>
                <li>
                  <a href='/#'>EURO</a>
                </li>
              </ul>
            </li>
            <li>English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              <ul>
                <li>
                  <a href='/#'>Polish</a>
                </li>
                <li>
                  <a href='/#'>Deutsch</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={`col text-right ${styles.topRight}`}>
          <ul> {props.user ?
            <li>
              <Link to={`${process.env.PUBLIC_URL}/profile/${props.user[0]._id}`}> {props.user[0].firstName} {props.user[0].lastName}</Link>
            </li>
            :
            <>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/login`}>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} /><span>Login</span>
                </Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/register`}>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} /><span>Register</span>
                </Link>
              </li>
              <li>
                <a href='/#'>
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
  user: PropTypes.array,
};

export default TopBar;
