import React from 'react';

import { l } from '@utils';

import {
  Info, Item, Navigation, Wrapper,
} from './parts';

export const Footer = () => (
  <Wrapper>
    <Info>2021 | pretty workplace | maxim novikov</Info>
    <Navigation>
      <Item>{l('aboutFooterText')}</Item>
      <Item>{l('supportFooterText')}</Item>
    </Navigation>
  </Wrapper>
);
