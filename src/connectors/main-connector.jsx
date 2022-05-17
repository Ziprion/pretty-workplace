import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import { Loading } from '@components';
import { setActiveWorkplace, setUser, setWorkplaces } from '@redux-store';

export const MainConnector = ({ children }) => {
  const dispatch = useDispatch();

  const {
    data: user,
    run: getUser,
    error: userError,
    loading: userLoading,
  } = useApiEffect(API_EFFECTS.USER.ME);

  const {
    data: activeWorkplace,
    loading: activeWorkplaceLoading,
    error: activeWorkplaceError,
    run: getActiveWorkplace,
  } = useApiEffect(API_EFFECTS.WORKPLACES.ACTIVE);

  const {
    data: workplaces,
    loading: workplacesLoading,
    error: workplacesError,
    run: getWorkplaces,
  } = useApiEffect(API_EFFECTS.WORKPLACES.ALL);

  useEffect(() => {
    getActiveWorkplace();
    getWorkplaces();
    getUser();
  }, []);

  useEffect(() => {
    if (workplaces) {
      dispatch(setWorkplaces(workplaces));
    }
  }, [ workplaces ]);

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [ user ]);

  useEffect(() => {
    if (activeWorkplace) {
      dispatch(setActiveWorkplace(activeWorkplace));
    }
  }, [ activeWorkplace ]);

  if ((activeWorkplaceError && activeWorkplaceError.status !== 404) || userError || workplacesError) {
    return <div>Something went wrong...</div>;
  }

  return (
    activeWorkplaceLoading || userLoading || workplacesLoading || !user
      ? <Loading />
      : <>{children}</>
  );
};
