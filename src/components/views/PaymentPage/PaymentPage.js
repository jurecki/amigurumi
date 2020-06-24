import React from 'react';
import styles from './PaymentPage.module.scss';
import PropTypes from 'prop-types';
import CheckoutSteps from '../../common/CheckoutSteps/CheckoutSteps';

class PaymentPage extends React.Component {
  state = {
    paymentMethod: '',
  }

  handleOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
    //dispatch savePaymentMethod
    this.props.history.push('/placeorder');
  }

  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <CheckoutSteps step1={'active'} step2={'active'} step3={'active'} step4={''} />
          </div>
          <div className='row justify-content-center'>
            <h3>Payment method:</h3>
          </div>
          <form onSubmit={this.handleOnChange} className='row justify-content-center '>
            <div className="form-check col-md-12 ">
              <input
                className='m-3 '
                type="radio"
                name="paymentMethod"
                id="paymentMethod1"
                value="paypal"
                onChange={this.handleOnChange}
              />
              <label htmlFor="paymentMethod1" className='form-check-label'> Paypal</label>
            </div>
            <div className="form-check col-md-12">
              <input
                className='m-3'
                type="radio"
                name="paymentMethod"
                id="paymentMethod2"
                value="bankTransfer"
                onChange={this.handleOnChange}
              />
              <label htmlFor="paymentMethod2" className='form-check-label'> Bank Transfer</label>
            </div>
            <div className='form-row justify-content-center mt-3'>
              <button type="submit" className="btn btn-secondary">Continue</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

PaymentPage.propTypes = {
  history: PropTypes.object,
};

export default PaymentPage;
