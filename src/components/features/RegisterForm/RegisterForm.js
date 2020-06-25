import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class RegisterForm extends React.Component {

  state = {
    users: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
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
    this.setState({
      users: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    });

    this.props.history.push('/login');
  }

  render() {
    const { firstName, lastName, email, password } = this.state.users;
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

        <div className='form-row justify-content-center mt-3'>
          <button type="submit" className="btn btn-secondary ">Register</button>
        </div>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  history: PropTypes.object,
};

export default withRouter(RegisterForm);
