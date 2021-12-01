import React, {
  useState, createContext, useContext,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { getCurrentTheme, setNewTheme } from 'utils';
import { LIGHT_THEME, DARK_THEME } from 'constants';
import { lightTheme, darkTheme } from 'style';

const ThemeContext = createContext();

const useProvideTheme = () => {
  const [theme, setTheme] = useState(getCurrentTheme());

  const toggleTheme = () => {
    const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

    setTheme(() => setNewTheme(newTheme));
  };

  return { theme, toggleTheme };
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
