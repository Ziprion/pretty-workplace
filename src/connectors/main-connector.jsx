import React, { useEffect } from 'react';
import { useApiEffect, API_EFFECTS } from '@api-effects';
import { useDispatch } from 'react-redux';
import { initialization } from '@redux-store';
import { Loading } from '@components';

export const MainConnector = ({ children }) => {
  const dispatch = useDispatch();
  const {
    data: workplacesData, loading: workplacesLoading, run: getMyWorkplaces,
  } = useApiEffect(API_EFFECTS.WORKPLACES.MY_WORKPLACES);
  const {
    data: userData, loading: userLoading, run: getUserMe,
  } = useApiEffect(API_EFFECTS.USER.ME);

  useEffect(() => {
    getMyWorkplaces();
    getUserMe();
  }, []);

  useEffect(() => {
    if (workplacesData && userData) {
      dispatch(initialization({ workplacesData, userData }));
    }
  }, [workplacesData, userData]);

  return (
    <>
      {workplacesLoading || userLoading ? <Loading /> : children}
    </>
  );
};
