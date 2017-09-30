import React from 'react';
import { Route } from 'react-router-dom';
import SignUpContainer from './Auth/SignUpContainer';

const appRoutes = [
  { exact: true, path: '/', render: () => <p>HOME</p> },
  { path: '/drinks', render: () => <p>DRINKS</p> },
  { path: '/login', render: () => <p>LOGIN</p> },
  { path: '/sign_up', component: SignUpContainer },
];

const Routes = (props) => {
  return appRoutes.map((routeProps, key) => <Route key={key} {...routeProps} />);
};

export default Routes;
