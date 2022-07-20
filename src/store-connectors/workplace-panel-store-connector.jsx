import React from 'react';
import { useSelector } from 'react-redux';

import { WorkplacesPanel } from '@components';

export const WorkplacePanelStoreConnector = () => {
  const workplaces = useSelector((state) => state.workplaces);
  const activeWorkplaceId = useSelector((state) => state.activeWorkplace.id);
  const activeWorkplaceTitle = useSelector((state) => state.activeWorkplace.title);

  return (
    <>
      {!!workplaces.length && activeWorkplaceId && activeWorkplaceTitle && (
        <WorkplacesPanel
          activeWorkplaceId={activeWorkplaceId}
          activeWorkplaceTitle={activeWorkplaceTitle}
          workplaces={workplaces}
        />
      )}
    </>
  );
};
