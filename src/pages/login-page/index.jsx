import React from 'react';
import { SIGNUP_KEY, SIGNIN_KEY } from 'utils';
import { useLocation } from 'react-router-dom';
import { LoginConnector } from 'connectors';
import { LoginPageWrapper } from './parts';

export const LoginPage = () => {
  const { pathname } = useLocation();
  const isSignup = pathname.slice(1) === SIGNUP_KEY;
  const type = isSignup ? SIGNUP_KEY : SIGNIN_KEY;

  return (
    <LoginPageWrapper>
      <LoginConnector type={type} isSignup={isSignup} />
    </LoginPageWrapper>
  );
};
