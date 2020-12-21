import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './_component/LoginPage';
import HomePage from './_component/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/home/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
