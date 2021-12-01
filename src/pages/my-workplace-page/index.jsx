import React, { useState, useEffect } from 'react';
import { MainConnector } from 'connectors';
import {
  getStorageItem, setStorageItem,
} from 'utils';
import { GREETING_KEY, GREETING_HIDE, GREETING_DELAY } from 'constants';
import { HeaderDataConnector } from 'data-connectors';
import { Wrapper, Header, Main } from './parts';

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
        <Header>
          <HeaderDataConnector />
        </Header>
        <Main>Main</Main>
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
