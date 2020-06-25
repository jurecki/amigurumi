import React from 'react';
import styles from './LoginPage.module.scss';
import LoginForm from '../../features/LoginForm/LoginFormContainer';

const LoginPage = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <h3>Login  to your account</h3>
      </div>
      <div className='row'>
        <div className={`col-12 ${styles.form}`}>
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
);

export default LoginPage;
