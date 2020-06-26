import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class LoginForm extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleOnChange = (e) => {
    e.preventDefault();

    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    //check if the user is register
    const loginUser = this.props.user.userInfo.find(user => user.email === this.state.email && user.password === this.state.password);
    this.props.userLogin(loginUser);

    if (this.props.cart.cartItems.length === 0) {
      console.log('koszyk', this.props.cart.cartItems.length);
      this.props.history.push('/profile/' + loginUser.id);
    } else {
      this.props.history.push('/shipping');
    }



  }

  render() {
    const { email, password } = this.state;
    return (
      < form onSubmit={this.handleOnSubmit} >
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" name='email' value={email} onChange={this.handleOnChange} />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password</label>
          <input type="password" className="form-control" id="inputPassword4" placeholder="Password" name='password' value={password} onChange={this.handleOnChange} />
        </div>
        <div className='form-row justify-content-start ml-3 mt-3'>
          <button type="submit" className="btn btn-secondary ">LOGIN</button>
        </div>
        <div>
          <Link to={`${process.env.PUBLIC_URL}/register`}>No account? Create one here ?</Link>
        </div>
      </form >
    );
  }
}

LoginForm.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
  userLogin: PropTypes.func,
  cart: PropTypes.object,
};

export default withRouter(LoginForm);
