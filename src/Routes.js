import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withAuth from './Auth/withAuth';
import SignUpContainer from './Auth/SignUpContainer';
import SignInContainer from './Auth/SignInContainer';
import NewRecipeContainer from './Recipe/New/NewRecipeContainer';

const appRoutes = [
  { exact: true, path: '/', render: () => <p>HOME</p> },
  { path: '/cocktails', render: () => <p>COCKTAILS</p> },
  { path: '/sign_in', component: SignInContainer },
  { path: '/sign_up', component: SignUpContainer },
  { path: '/recipes/new', component: withAuth(NewRecipeContainer) },
];

const Routes = (props) => {
  return (
    <Switch>
      {appRoutes.map((routeProps, key) => <Route key={key} {...routeProps} />)}
      <Route render={() => <p>404 PAGE</p>} />
    </Switch>
  );
};

export default Routes;
