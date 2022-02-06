import React, {
  createContext,
  useContext, useState,
} from 'react';

import { GREETING_KEY } from '@constants';
import { removeStorageItem } from '@utils';

const AuthContext = createContext();

const useProvideAuth = () => {
  const [ status, changeStatus ] = useState(false);

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
