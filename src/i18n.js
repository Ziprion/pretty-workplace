import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from '@locales';
import { getCurrentLanguage } from '@utils';

export default i18n
  .use(initReactI18next)
  .init({
    lng: getCurrentLanguage(),
    fallbackLng: false,
    resources,
  });
