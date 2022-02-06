import React from 'react';
import { Redirect } from 'react-router-dom';

import { ROUTES } from '@constants';
import { LoginPage, MyWorkplacePage } from '@pages';

const RedirectToMyWorkplacePage = () => <Redirect to={ROUTES.MY_WORKPLACE} />;
const RedirectToLoginPage = () => <Redirect to={ROUTES.SIGNIN} />;
const NotFoundPage = () => <div>NotFoundPage</div>;

export const APP_ROUTES = [
  {
    id: 1,
    exact: true,
    path: ROUTES.SIGNIN,
    getComponentByStatus: (status) => (status ? RedirectToMyWorkplacePage : LoginPage),
  },
  {
    id: 2,
    exact: true,
    path: ROUTES.SIGNUP,
    getComponentByStatus: (status) => (status ? RedirectToMyWorkplacePage : LoginPage),
  },
  {
    id: 3,
    exact: true,
    path: ROUTES.MY_WORKPLACE,
    getComponentByStatus: (status) => (status ? MyWorkplacePage : RedirectToLoginPage),
  },
  {
    id: 4,
    exact: true,
    path: ROUTES.HOME,
    getComponentByStatus: (status) => (status ? RedirectToMyWorkplacePage : RedirectToLoginPage),
  },
  {
    id: 5,
    exact: false,
    path: ROUTES.NOT_FOUND,
    getComponentByStatus: (status) => (status ? NotFoundPage : RedirectToLoginPage),
  },
];
