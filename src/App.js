import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AuthorizedRoute from './router/AuthorizedRoute';
import AppLayout from './AppLayout';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/auth' component={() => null} />
        <AuthorizedRoute path='/app' component={AppLayout} />
        <Redirect to='/auth' />
      </Switch>
    </Router>
  );
}

export default App;
