import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { AuthConnector } from 'connectors';
import { useAuth } from 'hooks';
import { APP_ROUTES } from './routes';

export const App = () => {
  const { status } = useAuth();

  return (
    <AuthConnector>
      <Router>
        <Switch>
          {APP_ROUTES.map(({
            id, exact, path, getComponentByStatus,
          }) => <Route key={id} exact={exact} path={path} component={getComponentByStatus(status)} />)}
        </Switch>
      </Router>
    </AuthConnector>
  );
};
