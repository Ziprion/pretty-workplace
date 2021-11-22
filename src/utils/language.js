import { useTranslation } from 'react-i18next';
import { getStorageItem, setStorageItem } from 'utils';

const LANGUAGE_KEY = 'language';
const LANGUAGE_RU = 'ru';
const LANGUAGE_EN = 'en';
const DEFAULT_LANGUAGE = LANGUAGE_RU;

export const getCurrentLanguage = () => {
  const currentLanguage = getStorageItem(LANGUAGE_KEY);

  if (!currentLanguage) {
    setStorageItem(LANGUAGE_KEY, DEFAULT_LANGUAGE);

    return DEFAULT_LANGUAGE;
  }

  return currentLanguage;
};

export const toggleLanguage = () => {
  const currentLanguage = getCurrentLanguage();
  const newLanguage = currentLanguage === LANGUAGE_RU ? LANGUAGE_EN : LANGUAGE_RU;

  setStorageItem(LANGUAGE_KEY, newLanguage);

  return newLanguage;
};

export const l = (text) => {
  const { t } = useTranslation();
  const translatedText = t(text);

  return translatedText;
};
