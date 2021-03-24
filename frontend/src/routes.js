import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SignIn from './components/Login/index'
import SignUp from './components/CreateUser/index'
import InitialPage from './components/InitialPage/index'


const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact component={InitialPage} path="/" />
      <Route component={SignUp} path="/signup" />
      <Route component={SignIn} path="/signin" />
    </BrowserRouter>
  );
}

export default Routes;