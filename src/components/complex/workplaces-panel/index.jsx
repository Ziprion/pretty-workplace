import React from 'react';

import { AddWorkplaceConnector, WorkplaceMenuConnector, WorkplaceSwitcherConnector } from '@connectors';

import { ActionBar, Title, Wrapper } from './parts';

export const WorkplacesPanel = ({ activeWorkplaceTitle, workplaces, activeWorkplaceId }) => (
  <Wrapper>
    {activeWorkplaceTitle && <Title>{activeWorkplaceTitle}</Title>}
    <ActionBar>
      {workplaces?.length > 1 && activeWorkplaceId && (
        <WorkplaceSwitcherConnector
          activeWorkplaceId={activeWorkplaceId}
          workplaces={workplaces}
        />
      )}
      <AddWorkplaceConnector />
      {activeWorkplaceId && (
        <WorkplaceMenuConnector
          activeWorkplaceId={activeWorkplaceId}
          activeWorkplaceTitle={activeWorkplaceTitle}
        />
      )}
    </ActionBar>
  </Wrapper>
);
