import React from 'react';
import { useSelector } from 'react-redux';

import { WorkplacesPanel } from '@components';

export const WorkplacePanelStoreConnector = () => {
  const {
    workplaces,
    activeWorkplace: {
      id: activeWorkplaceId,
      title: activeWorkplaceTitle,
    },
  } = useSelector((state) => state);

  return (
    <WorkplacesPanel
      activeWorkplaceId={activeWorkplaceId}
      activeWorkplaceTitle={activeWorkplaceTitle}
      workplaces={workplaces}
    />
  );
};
