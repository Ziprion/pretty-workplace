import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const useProvideAuth = () => {
  const [ status, changeStatus ] = useState(true);

  const signin = () => changeStatus(true);

  const signout = () => {
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

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
