import React from 'react';
import { Redirect } from 'react-router-dom';

import { LoginPage, WorkplacePage } from '@pages';

export const ROUTES = {
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  WORKPLACE: '/workplace',
  OTHERS: '*',
};

const RedirectToWorkplacePage = () => <Redirect to={ROUTES.WORKPLACE} />;
const RedirectToLoginPage = () => <Redirect to={ROUTES.SIGNIN} />;

export const APP_ROUTES = [
  {
    id: 1,
    exact: true,
    path: ROUTES.SIGNIN,
    component: LoginPage,
  },
  {
    id: 2,
    exact: true,
    path: ROUTES.SIGNUP,
    component: LoginPage,
  },
  {
    id: 3,
    exact: false,
    path: ROUTES.OTHERS,
    component: RedirectToLoginPage,
  },
];

export const AUTH_APP_ROUTES = [
  {
    id: 1,
    exact: true,
    path: ROUTES.WORKPLACE,
    component: WorkplacePage,
  },
  {
    id: 2,
    exact: false,
    path: ROUTES.OTHERS,
    component: RedirectToWorkplacePage,
  },
];
