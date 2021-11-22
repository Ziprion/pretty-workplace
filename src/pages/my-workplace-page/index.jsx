import React, { useState, useEffect } from 'react';
import { MainConnector } from 'connectors';
import styled from 'styled-components';
import {
  getStorageItem, setStorageItem, l, GREETING_KEY, GREETING_HIDE, GREETING_DELAY,
} from 'utils';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-basis: 150px;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  color: green;
  background: red;
`;

export const MyWorkplacePage = () => {
  const [isShowGreeting, setShowGreeting] = useState(false);
  const hideGreeting = () => setShowGreeting(false);
  const showGreeting = () => setShowGreeting(true);
  const greetingStatus = getStorageItem(GREETING_KEY);

  useEffect(() => {
    if (greetingStatus !== GREETING_HIDE) {
      showGreeting();
      setStorageItem(GREETING_KEY, GREETING_HIDE);
      setTimeout(hideGreeting, GREETING_DELAY);
    }
  }, [greetingStatus]);

  return (
    <MainConnector>
      <Wrapper>
        {l('greeting')}
        !, That is MyWorkplacePage
      </Wrapper>
      {isShowGreeting && (
        <div style={{
          position: 'absolute', top: 0, left: 0, zIndex: 1, width: '100vw', height: '100vh', background: 'green',
        }}
        >
          HELLO!
        </div>
      )}

    </MainConnector>
  );
};
