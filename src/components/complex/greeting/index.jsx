import React from 'react';
import Lottie from 'lottie-react';
import { useSelector } from 'react-redux';

import { getFullName, getTimeOfDay, l } from '@utils';

import animationData from './animation-data.json';
import {
  AdditionalMessage, GreetingMessage, LoadingWrapper, UserName, WelcomeMessage, Wrapper,
} from './parts';

export const Greeting = () => {
  const currentGreetingKey = getTimeOfDay();
  const currentGreeting = l(currentGreetingKey);
  const additionalMessage = l('additionalGreetingMessage');

  const { user } = useSelector((state) => state);

  return (
    <Wrapper>
      <WelcomeMessage>
        <GreetingMessage>
          {currentGreeting}
          {user && (
            <UserName>
              {', '}
              {getFullName(user)}
            </UserName>
          )}
          !
        </GreetingMessage>
        <AdditionalMessage>
          {additionalMessage}
        </AdditionalMessage>
      </WelcomeMessage>
      <LoadingWrapper>
        <Lottie animationData={animationData} loop={false} />
      </LoadingWrapper>
    </Wrapper>
  );
};
