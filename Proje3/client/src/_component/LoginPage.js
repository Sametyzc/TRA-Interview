import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import { login } from '../_service';

const validate = values => {
  const errors = {};
  if (!values.mail) {
    errors.mail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
    errors.mail = 'Invalid mail address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

const LoginPage = () => {
  const [authorized, setAuthorized] = useState(false);

  const formik = useFormik({
    initialValues: {
      mail: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      login(values.mail, values.password);
      const user = JSON.parse(localStorage.getItem('currentUser'));
      if (user.token !== 'undefined' && user.token !== null) {
        setAuthorized(true);
      }
    },
  });
  return (
    <div className="jumbotron">
      {authorized && (
        <Redirect to="/home/" />
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="alert alert-info">
              Mail :test@example.com
              <br />
              Password :test
            </div>
            <h2>Login</h2>

            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="mail">Email</label>
                <br />
                <input
                  id="mail"
                  name="mail"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.mail}
                />
                {formik.errors.mail ? (
                  <div className="alert alert-danger">{formik.errors.mail}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password ? (
                  <div className="alert alert-danger">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
