import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Footer } from '@components';
import { MainConnector } from '@connectors';
import { GREETING_DELAY, GREETING_HIDE, GREETING_KEY } from '@constants';
import { HeaderDataConnector, MyWorkplaceDataConnector } from '@data-connectors';
import { getStorageItem, setStorageItem } from '@utils';

import {
  FooterWrapper,
  HeaderWrapper,
  MainWrapper,
  Wrapper,
} from './parts';

export const MyWorkplacePage = () => {
  const [ isShowGreeting, setShowGreeting ] = useState(false);
  const hideGreeting = () => setShowGreeting(false);
  const showGreeting = () => setShowGreeting(true);
  const greetingStatus = getStorageItem(GREETING_KEY);

  useEffect(() => {
    if (greetingStatus !== GREETING_HIDE) {
      showGreeting();
      setStorageItem(GREETING_KEY, GREETING_HIDE);
      setTimeout(hideGreeting, GREETING_DELAY);
    }
  }, [ greetingStatus ]);

  return (
    <MainConnector>
      <Wrapper>
        <HeaderWrapper>
          <HeaderDataConnector />
        </HeaderWrapper>
        <MainWrapper>
          <DndProvider backend={HTML5Backend}>
            <MyWorkplaceDataConnector />
          </DndProvider>
        </MainWrapper>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Wrapper>
      {isShowGreeting && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          width: '100vw',
          height: '100vh',
          background: 'green',
        }}
        >
          HELLO!
        </div>
      )}
    </MainConnector>
  );
};
