import React from 'react';
import { MainConnector } from 'connectors';
import styled from 'styled-components';
import { l } from 'utils';

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

export const MyWorkplacePage = () => (
  <MainConnector>
    <Wrapper>
      {l('greeting')}
      !, That is MyWorkplacePage
    </Wrapper>
  </MainConnector>
);
