import React, { useState, useContext, createContext } from 'react';
import { removeStorageItem } from '@utils';
import { GREETING_KEY } from '@constants';

const AuthContext = createContext();

const useProvideAuth = () => {
  const [status, changeStatus] = useState(false);

  const signin = () => {
    changeStatus(true);
  };

  const signout = () => {
    removeStorageItem(GREETING_KEY);
    changeStatus(false);
  };

  return {
    status,
    signin,
    signout,
  };
};

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
