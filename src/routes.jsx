import React from 'react';
import { Redirect } from 'react-router-dom';

import { LoginPage, WorkplacePage } from '@pages';

export const ROUTES = {
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  WORKPLACE: '/workplace',
  HOME: '/',
  NOT_FOUND: '*',
};

const RedirectToWorkplacePage = () => <Redirect to={ROUTES.WORKPLACE} />;
const RedirectToLoginPage = () => <Redirect to={ROUTES.SIGNIN} />;
const NotFoundPage = () => <div>NotFoundPage</div>;

export const APP_ROUTES = [
  {
    id: 1,
    exact: true,
    path: ROUTES.SIGNIN,
    getComponentByStatus: (status) => (status ? RedirectToWorkplacePage : LoginPage),
  },
  {
    id: 2,
    exact: true,
    path: ROUTES.SIGNUP,
    getComponentByStatus: (status) => (status ? RedirectToWorkplacePage : LoginPage),
  },
  {
    id: 3,
    exact: true,
    path: ROUTES.WORKPLACE,
    getComponentByStatus: (status) => (status ? WorkplacePage : RedirectToLoginPage),
  },
  {
    id: 4,
    exact: true,
    path: ROUTES.HOME,
    getComponentByStatus: (status) => (status ? RedirectToWorkplacePage : RedirectToLoginPage),
  },
  {
    id: 5,
    exact: false,
    path: ROUTES.NOT_FOUND,
    getComponentByStatus: (status) => (status ? NotFoundPage : RedirectToLoginPage),
  },
];
