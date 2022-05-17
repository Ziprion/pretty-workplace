import React from 'react';
import { useLocation } from 'react-router-dom';

import { Logo } from '@components';
import { LoginFormConnector } from '@connectors';
import { LOGIN_FORM_ADDITIONAL, SIGNIN, SIGNUP } from '@constants';

import { LoginFormWrapper, Message, Wrapper } from './parts';

export const LoginPage = () => {
  const { pathname } = useLocation();
  const type = pathname.slice(1) === SIGNUP ? SIGNUP : SIGNIN;
  const { mainTitle } = LOGIN_FORM_ADDITIONAL[type];

  return (
    <Wrapper>
      <LoginFormWrapper>
        <Logo />
        <Message>
          {mainTitle}
        </Message>
        <LoginFormConnector type={type} />
      </LoginFormWrapper>
    </Wrapper>
  );
};
