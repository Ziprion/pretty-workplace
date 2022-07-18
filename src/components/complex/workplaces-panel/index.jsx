import React, { memo } from 'react';

import { AddBoardConnector, WorkplaceMenuConnector } from '@connectors';

import { ActionBar, Title, Wrapper } from './parts';

export const WorkplacesPanel = memo(({ activeWorkplaceTitle, workplaces = [], activeWorkplaceId }) => (
  <Wrapper>
    {activeWorkplaceId && activeWorkplaceTitle && (
      <>
        <Title>{activeWorkplaceTitle}</Title>
        <ActionBar>
          <AddBoardConnector />
          <WorkplaceMenuConnector
            activeWorkplaceId={activeWorkplaceId}
            activeWorkplaceTitle={activeWorkplaceTitle}
            workplaces={workplaces}
          />
        </ActionBar>
      </>
    )}
  </Wrapper>
));
