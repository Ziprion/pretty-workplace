import { getStorageItem, setStorageItem } from 'utils';

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

const DEFAULT_THEME = LIGHT_THEME;
const THEME_KEY = 'theme';

export const setNewTheme = (newTheme) => {
  setStorageItem(THEME_KEY, newTheme);

  return newTheme;
};

export const getCurrentTheme = () => {
  const currentTheme = getStorageItem(THEME_KEY);

  if (!currentTheme) {
    return setNewTheme(DEFAULT_THEME);
  }

  return currentTheme;
};
