import React from 'react';
import styles from './ShippingPage.module.scss';
import PropTypes from 'prop-types';
import CheckoutSteps from '../../common/CheckoutSteps/CheckoutSteps';

class ShippingPage extends React.Component {

  state = {
    address: '',
    city: '',
    zip: '',
    cuntry: '',
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.saveShipping(this.state);
    this.props.history.push('/payment');
  }

  render() {
    const { firstName, lastName, address, city, zip, country } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <CheckoutSteps step1={'active'} step2={'active'} step3={''} step4={''} />
          </div>
          <div className='row'>
            <form onSubmit={this.handleOnSubmit} className='col-12'>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="First Name" name='firstName' value={firstName} onChange={this.handleOnChange} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Last Name" name='lastName' value={lastName} onChange={this.handleOnChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Wroclawska 13/3" name='address' value={address} onChange={this.handleOnChange} />
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" placeholder="Wroclaw" name='city' value={city} onChange={this.handleOnChange} />
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip" placeholder="50-213" name='zip' value={zip} onChange={this.handleOnChange} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="country">Country</label>
                  <input type="text" className="form-control" id="inputCountry" placeholder="Poland" name='country' value={country} onChange={this.handleOnChange} />
                </div>
              </div>
              <div className='form-row justify-content-center mt-3'>
                <button type="submit" className="btn btn-secondary ">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div >
    );
  }
}

ShippingPage.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  zip: PropTypes.string,
  country: PropTypes.string,
  history: PropTypes.object,
  saveShipping: PropTypes.func,
};

export default ShippingPage;
