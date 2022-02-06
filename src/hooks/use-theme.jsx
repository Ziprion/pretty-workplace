import React, {
  createContext, useContext,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';

import { DARK_THEME, LIGHT_THEME } from '@constants';
import { darkTheme, lightTheme } from '@style';
import { getCurrentTheme, setNewTheme } from '@utils';

const ThemeContext = createContext();

const useProvideTheme = () => {
  const [ theme, setTheme ] = useState(getCurrentTheme());

  const toggleTheme = () => {
    const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

    setTheme(() => setNewTheme(newTheme));
  };

  return {
    theme,
    toggleTheme,
  };
};

export const ProvideTheme = ({ children }) => {
  const themeState = useProvideTheme();

  return (
    <ThemeContext.Provider value={themeState}>
      <ThemeProvider theme={themeState.theme === LIGHT_THEME ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
