import { DEFAULT_THEME, THEME_KEY } from '@constants';
import { getStorageItem, setStorageItem } from '@utils';

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
