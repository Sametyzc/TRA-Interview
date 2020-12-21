import React from 'react';
import { Redirect } from 'react-router-dom';

const HomePage = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (user.token !== 'undefined' && user.token !== null) {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h5>
                Welcome
                {' '}
                <bold>{user.userName}</bold>
                !
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Redirect to="/login" />;
};

export default HomePage;
