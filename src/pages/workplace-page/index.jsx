import React from 'react';

import { Footer, Header } from '@components';
import { MainConnector, WorkplaceConnector } from '@connectors';
import { WorkplacePanelDataConnector } from '@data-connectors';

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
        <WorkplacePanelDataConnector />
        <WorkplaceConnector />
      </MainWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  </MainConnector>
);
