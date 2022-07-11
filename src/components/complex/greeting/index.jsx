import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

import { getFullName, getTimeOfDay, l } from '@utils';

import animationData from './animation-data.json';
import {
  AdditionalMessage, GreetingMessage, LoadingWrapper, UserName, WelcomeMessage, Wrapper,
} from './parts';

export const Greeting = ({ user, isFade }) => {
  const [ isShow, setShow ] = useState(true);

  const currentGreetingKey = getTimeOfDay();
  const currentGreeting = l(currentGreetingKey);
  const additionalMessage = l('additionalGreetingMessage');

  useEffect(() => {
    // eslint-disable-next-line functional/no-let
    let timer;

    if (isFade) {
      timer = setTimeout(() => setShow(() => false), 500);
    }

    return () => clearTimeout(timer);
  }, [ isFade ]);

  return isShow && (
    <>
      <Wrapper isFade={isFade}>
        {user && (
          <>
            <WelcomeMessage>
              <GreetingMessage>
                { `${currentGreeting}, `}
                <UserName>
                  {`${getFullName(user)}!`}
                </UserName>
              </GreetingMessage>
              <AdditionalMessage>
                {additionalMessage}
              </AdditionalMessage>
            </WelcomeMessage>
            <LoadingWrapper>
              <Lottie animationData={animationData} loop={false} />
            </LoadingWrapper>
          </>
        )}
      </Wrapper>
    </>
  );
};
