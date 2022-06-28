import React from 'react';

import { AddBoardConnector, WorkplaceMenuConnector } from '@connectors';

import { ActionBar, Title, Wrapper } from './parts';

export const WorkplacesPanel = ({ activeWorkplaceTitle, workplaces, activeWorkplaceId }) => (
  <>
    {activeWorkplaceId && activeWorkplaceTitle && (
      <Wrapper>
        <Title>{activeWorkplaceTitle}</Title>
        <ActionBar>
          <AddBoardConnector />
          <WorkplaceMenuConnector
            activeWorkplaceId={activeWorkplaceId}
            activeWorkplaceTitle={activeWorkplaceTitle}
            workplaces={workplaces}
          />
        </ActionBar>
      </Wrapper>
    )}
  </>
);
