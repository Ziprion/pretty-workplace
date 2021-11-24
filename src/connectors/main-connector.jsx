import React, { useEffect, useState } from 'react';
import { useApiEffect, API_EFFECTS } from 'api-effects';
import { useDispatch } from 'react-redux';
import { initialization } from 'redux-store';

export const MainConnector = ({ children }) => {
  const dispatch = useDispatch();
  const { data: workplacesData, run: getMyWorkplaces } = useApiEffect(API_EFFECTS.WORKPLACES.MY_WORKPLACES);
  const { data: userData, run: getUserMe } = useApiEffect(API_EFFECTS.USER.ME);

  const [isDataReady, setDataReady] = useState(false);

  useEffect(() => {
    getMyWorkplaces();
    getUserMe();
  }, []);

  useEffect(() => {
    if (workplacesData && userData) {
      dispatch(initialization({ workplacesData, userData }));
      setDataReady(() => true);
    }
  }, [workplacesData, userData]);

  return (
    <>
      {isDataReady ? children : <div>loading</div>}
    </>
  );
};
