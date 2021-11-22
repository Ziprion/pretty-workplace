import React, { useEffect } from 'react';
import { TOKEN_KEY, useAuth } from 'hooks';
import { getStorageItem } from 'utils';
import { useApiEffect, API_EFFECTS } from 'api-effects';

export const AuthConnector = ({ children }) => {
  const { data, loading, run } = useApiEffect(API_EFFECTS.AUTH.CHECK);
  const { signin } = useAuth();

  const token = getStorageItem(TOKEN_KEY);

  useEffect(() => {
    if (token) {
      run({ token });
    }
  }, []);

  useEffect(() => {
    if (data) {
      signin(data.token);
    }
  }, [data]);

  return (
    loading ? <div>loading</div>
      : (
        <>
          {children}
        </>
      )
  );
};
