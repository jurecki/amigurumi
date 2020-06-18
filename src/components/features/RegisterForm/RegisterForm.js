import React from 'react';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component {

  state = {
    users: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      city: '',
      zip: '',
    },
  }

  static propTypes = {
    addUser: PropTypes.func,
  }

  handleOnChange = (e) => {
    e.preventDefault();

    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      users: {
        ...this.state.users,
        [name]: value,
      },
    });

  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    this.props.addUser(this.state.users);

    alert('User has been added');

    this.setState({
      users: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        city: '',
        zip: '',
      },
    });
  }

  render() {
    const { firstName, lastName, email, password, address, city, zip } = this.state.users;
    return (
      <form onSubmit={this.handleOnSubmit} >
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
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" name='email' value={email} onChange={this.handleOnChange} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" name='password' value={password} onChange={this.handleOnChange} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name='address' value={address} onChange={this.handleOnChange} />
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" name='city' value={city} onChange={this.handleOnChange} />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" name='zip' value={zip} onChange={this.handleOnChange} />
          </div>
        </div>
        <div className='form-row justify-content-center mt-3'>
          <button type="submit" className="btn btn-secondary ">Sign in</button>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
