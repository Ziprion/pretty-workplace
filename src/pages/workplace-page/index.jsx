import React from 'react';

import { Footer, Header } from '@components';
import { MainConnector, WorkplaceConnector } from '@connectors';
import { WorkplacePanelStoreConnector } from '@store-connectors';

import {
  FooterWrapper, HeaderWrapper, MainWrapper, Wrapper,
} from './parts';

export const WorkplacePage = () => (
  <MainConnector>
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MainWrapper>
        <WorkplacePanelStoreConnector />
        <WorkplaceConnector />
      </MainWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  </MainConnector>
);
