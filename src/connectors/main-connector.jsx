import React, { useEffect, useState } from 'react';
import { useApiEffect, API_EFFECTS } from 'api-effects';
import { useDispatch } from 'react-redux';
import { initialization } from 'redux-store';

export const MainConnector = ({ children }) => {
  const dispatch = useDispatch();
  const { data: workplacesData, run: getMyWorkplaces } = useApiEffect(API_EFFECTS.WORKPLACES.MY_WORKPLACES);
  const { data: userData, run: getUserMe } = useApiEffect(API_EFFECTS.USERS.ME);

  const [isDataReady, setDataReady] = useState(false);
  const [isShowGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    getMyWorkplaces();
    getUserMe();
  }, []);

  useEffect(() => {
    if (workplacesData && userData) {
      dispatch(initialization({ workplacesData, userData }));
      setDataReady(() => true);
      setShowGreeting(() => true);
    }
  }, [workplacesData, userData]);

  useEffect(() => {
    if (isShowGreeting) {
      setTimeout(() => setShowGreeting(() => false), 2000);
    }
  }, [isShowGreeting]);

  return (
    <>
      {isDataReady ? children : <div>loading</div>}
      {isShowGreeting && (
      <div style={{
        position: 'absolute', top: 0, left: 0, zIndex: 1, width: '100vw', height: '100vh', background: 'green',
      }}
      >
        HELLO!
      </div>
      )}
    </>
  );
};
