import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, STATUSES, useApiEffect } from '@api-effects';
import { Greeting } from '@components';
import { setActiveWorkplace, setWorkplaces } from '@redux-store';

export const MainConnector = ({ children }) => {
  const dispatch = useDispatch();

  const [ isReady, setReady ] = useState(false);

  const {
    data: activeWorkplace,
    error: activeWorkplaceError,
    status: activeWorkplaceStatus,
    run: getActiveWorkplace,
  } = useApiEffect(API_EFFECTS.WORKPLACES.ACTIVE);

  const {
    data: workplaces,
    status: workplacesStatus,
    error: workplacesError,
    run: getWorkplaces,
  } = useApiEffect(API_EFFECTS.WORKPLACES.ALL);

  useEffect(() => {
    getActiveWorkplace();
    getWorkplaces();
  }, []);

  useEffect(() => {
    if (workplaces) {
      dispatch(setWorkplaces(workplaces));
    }
  }, [ workplaces ]);

  useEffect(() => {
    if (activeWorkplace) {
      dispatch(setActiveWorkplace(activeWorkplace));
    }
  }, [ activeWorkplace ]);

  useEffect(() => {
    // eslint-disable-next-line functional/no-let
    let timer;

    if (
      (activeWorkplaceStatus !== null || activeWorkplaceStatus !== STATUSES.PENDING)
      && (workplacesStatus !== null || workplacesStatus !== STATUSES.PENDING)
    ) {
      timer = setTimeout(() => setReady(true), 4500);
    }

    return () => clearTimeout(timer);
  }, [ activeWorkplaceStatus, workplacesStatus ]);

  if ((activeWorkplaceError && activeWorkplaceError.status !== 404) || workplacesError) {
    return <div>!!!!!!Something went wrong...</div>;
  }

  return (
    isReady
      ? <>{children}</>
      : <Greeting />
  );
};
