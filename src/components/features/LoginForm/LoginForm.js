import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

  state = {
    user: {
      email: '',
      password: '',
    },
  }

  render() {
    const { email, password } = this.state.user;
    return (
      <form onSubmit={this.handleOnSubmit} >
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
      </form>
    );
  }
}

export default LoginForm;
