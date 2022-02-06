import React from 'react';
import { useLocation } from 'react-router-dom';

import { Logo } from '@components';
import { LoginConnector } from '@connectors';
import {
  LOGIN_FORM_ADDITIONAL,
  SIGNIN_KEY, SIGNUP_KEY,
} from '@constants';

import {
  LoginFormWrapper,
  Message,
  Wrapper,
} from './parts';

export const LoginPage = () => {
  const { pathname } = useLocation();
  const type = pathname.slice(1) === SIGNUP_KEY ? SIGNUP_KEY : SIGNIN_KEY;
  const { mainTitle } = LOGIN_FORM_ADDITIONAL[type];

  return (
    <Wrapper>
      <LoginFormWrapper>
        <Logo />
        <Message>
          {mainTitle}
        </Message>
        <LoginConnector type={type} />
      </LoginFormWrapper>
    </Wrapper>
  );
};
