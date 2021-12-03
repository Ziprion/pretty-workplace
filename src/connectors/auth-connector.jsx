import React, { useEffect } from 'react';
import { useAuth } from '@hooks';
import { useApiEffect, API_EFFECTS } from '@api-effects';

export const AuthConnector = ({ children }) => {
  const { data, loading, run } = useApiEffect(API_EFFECTS.AUTH.CHECK);
  const { signin } = useAuth();

  useEffect(() => {
    run();
  }, []);

  useEffect(() => {
    if (data) {
      signin();
    }
  }, [data]);

  return (
    <>
      {!loading && children}
    </>
  );
};
