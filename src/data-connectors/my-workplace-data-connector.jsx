import { MyWorkplace } from '@components';
import React from 'react';
import { useSelector } from 'react-redux';

export const MyWorkplaceDataConnector = () => {
  const { activeWorkplaceId, myWorkplaces } = useSelector((state) => state.workplaces);
  const activeWorkplace = myWorkplaces?.find(({ id }) => id === activeWorkplaceId);

  return (
    <>
      {activeWorkplace && <MyWorkplace {...activeWorkplace} />}
    </>
  );
};
