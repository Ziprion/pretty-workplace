import React from 'react';
import { SIGNUP_KEY, SIGNIN_KEY } from '@constants';
import { useLocation } from 'react-router-dom';
import { LoginConnector } from '@connectors';
import { Logo } from '@components';
import { Wrapper, LoginFormWrapper, Message } from './parts';

export const LoginPage = () => {
  const { pathname } = useLocation();
  const isSignup = pathname.slice(1) === SIGNUP_KEY;
  const type = isSignup ? SIGNUP_KEY : SIGNIN_KEY;

  return (
    <Wrapper>
      <LoginFormWrapper>
        <Logo />
        <Message>
          {isSignup ? 'Create your account to continue' : 'Login to your account to continue'}
        </Message>
        <LoginConnector type={type} isSignup={isSignup} />
      </LoginFormWrapper>
    </Wrapper>
  );
};
