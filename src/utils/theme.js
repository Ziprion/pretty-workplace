import { getStorageItem, setStorageItem } from 'utils';
import { THEME_KEY, DEFAULT_THEME } from 'constants';

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
