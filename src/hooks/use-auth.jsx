import React, { useState, useContext, createContext } from 'react';
import { GREETING_KEY, removeStorageItem, setStorageItem } from 'utils';

export const TOKEN_KEY = 'token';

const AuthContext = createContext();

const useProvideAuth = () => {
  const [status, changeStatus] = useState(false);

  const signin = (token) => {
    setStorageItem(TOKEN_KEY, token);
    changeStatus(true);
  };

  const signout = () => {
    removeStorageItem(TOKEN_KEY);
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
