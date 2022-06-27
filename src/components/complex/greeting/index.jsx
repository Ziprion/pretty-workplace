import React from 'react';
import Lottie from 'lottie-react';
import { useSelector } from 'react-redux';

import { getFullName, getTimeOfDay } from '@utils';

import animationData from './animation-data.json';
import {
  AdditionalMessage, GreetingMessage, LoadingWrapper, WelcomeMessage, Wrapper,
} from './parts';

export const Greeting = () => {
  const currentGreeting = getTimeOfDay();
  const { user } = useSelector((state) => state);

  return (
    <Wrapper>
      <WelcomeMessage>
        <GreetingMessage>
          {user && `${currentGreeting}, ${getFullName(user)}!`}
        </GreetingMessage>
        <AdditionalMessage>
          We are putting it all together...
        </AdditionalMessage>
      </WelcomeMessage>
      <LoadingWrapper>
        <Lottie animationData={animationData} />
      </LoadingWrapper>
    </Wrapper>
  );
};
