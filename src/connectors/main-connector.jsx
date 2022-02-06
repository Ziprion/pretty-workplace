import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import { Loading } from '@components';
import { initialization } from '@redux-store';

export const MainConnector = ({ children }) => {
  const dispatch = useDispatch();
  const {
    data: workplacesData, loading: workplacesLoading, run: getWorkplacesData,
  } = useApiEffect(API_EFFECTS.WORKPLACES.MY_WORKPLACES);
  const {
    data: userData, loading: userLoading, run: getUserData,
  } = useApiEffect(API_EFFECTS.USER.ME);

  useEffect(() => {
    getWorkplacesData();
    getUserData();
  }, []);

  useEffect(() => {
    if (workplacesData && userData) {
      dispatch(initialization({
        workplacesData,
        userData,
      }));
    }
  }, [ workplacesData, userData ]);

  return (
    <>
      {workplacesLoading || userLoading ? <Loading /> : children}
    </>
  );
};
