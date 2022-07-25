import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { AuthConnector } from '@connectors';
import { useAuth } from '@hooks';

import { APP_ROUTES, AUTH_APP_ROUTES } from './routes';

export const App = () => {
  const { status } = useAuth();

  return (
    <AuthConnector>
      <Router>
        <Switch>
          {(status ? AUTH_APP_ROUTES : APP_ROUTES).map(({
            id, exact, path, component,
          }) => (
            <Route
              key={id}
              component={component}
              exact={exact}
              path={path}
            />
          ))}
        </Switch>
      </Router>
    </AuthConnector>
  );
};
