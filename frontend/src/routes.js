import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SignIn from './components/Login'
import SignUp from './components/CreateUser'
import Home from './Home'


const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/home" />
      <Route component={SignUp} path="/signup" />
      <Route exact component={SignIn} path="/" />
    </BrowserRouter>
  );
}

export default Routes;