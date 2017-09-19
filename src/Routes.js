import React from 'react';
import { Route } from 'react-router-dom';
import SignUpForm from './Auth/SignUpForm';

const Routes = (props) => {
  return (
    <div>
      <Route exact path='/' render={() => <p>HOME</p>} />
      <Route path='/drinks' render={() => <p>DRINKS</p>} />
      <Route path='/login' render={() => <p>LOGIN</p>} />
      <Route path='/sign_up' component={SignUpForm} />
    </div>
  );
};

export default Routes;
