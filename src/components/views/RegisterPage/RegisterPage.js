import React from 'react';
import styles from './RegisterPage.module.scss';

class RegisterPage extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <h3>Create an account</h3>
          </div>
          <div className='row'>
            <div className={`col-12 ${styles.form}`}>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label forHtml="name">First Name</label>
                    <input type="text" className="form-control" id="name" placeholder="First Name" />
                  </div>
                  <div className="form-group col-md-6">
                    <label forHtml="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                  </div>
                  <div className="form-group col-md-6">
                    <label forHtml="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group">
                  <label forHtml="inputAddress">Address</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                  <label forHtml="inputAddress2">Address 2</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label forHtml="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="form-group col-md-4">
                    <label forHtml="inputState">State</label>
                    <select id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label forHtml="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" forHtml="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;

