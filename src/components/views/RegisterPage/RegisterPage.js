import React from 'react';
import styles from './RegisterPage.module.scss';
import RegisterForm from '../../features/RegisterForm/RegisterFormContainer';

const RegisterPage = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <h3>Create an account</h3>
      </div>
      <div className='row'>
        <div className={`col-12 ${styles.form}`}>
          <RegisterForm />
        </div>
      </div>
    </div>
  </div>
);

export default RegisterPage;

