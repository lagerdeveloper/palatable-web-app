import React from 'react';
import { Route } from 'react-router-dom';

const Routes = (props) => {
  return (
    <div>
      <Route exact path='/' render={() => <p>HOME</p>} />
      <Route path='/drinks' render={() => <p>DRINKS</p>} />
      <Route path='/login' render={() => <p>LOGIN</p>} />
    </div>
  );
};

export default Routes;
