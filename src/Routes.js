import React from 'react';
import { Route } from 'react-router-dom';
import SignUpContainer from './Auth/SignUpContainer';

const Routes = (props) => {
  return [
      <Route exact path='/' render={() => <p>HOME</p>} />,
      <Route path='/drinks' render={() => <p>DRINKS</p>} />,
      <Route path='/login' render={() => <p>LOGIN</p>} />,
      <Route path='/sign_up' component={SignUpContainer} />,
  ];
};

export default Routes;
