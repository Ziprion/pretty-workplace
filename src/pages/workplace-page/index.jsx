import React from 'react';

import { Footer, Header } from '@components';
import { MainConnector } from '@connectors';
import { WorkplaceDataConnector } from '@data-connectors';

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
        <WorkplaceDataConnector />
      </MainWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  </MainConnector>
);
