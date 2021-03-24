import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SignIn from './components/Login'
import SignUp from './components/CreateUser'
import Home from './Home'
import InitialPage from './components/InitialPage'


const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact component={InitialPage} path="/" />
      <Route component={SignUp} path="/signup" />
      <Route component={SignIn} path="/signin" />
      <Route component={Home} path="/home" /> 
    </BrowserRouter>
  );
}

export default Routes;