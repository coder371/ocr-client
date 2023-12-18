import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslation from './translations/en.json';
import arTranslation from './translations/ar.json';
import {I18nManager} from 'react-native';
import Restart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async callback => {
    AsyncStorage.getItem('language').then(data => {
      callback(data ?? 'ar');
    });
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

const i18n = i18next.createInstance();

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {translation: arTranslation},
      en: {translation: enTranslation},
    },
    compatibilityJSON: 'v3',
    interpolation: {escapeValue: false},
  });

const changeLanguage = language => {
  AsyncStorage.setItem('language', language);
  I18nManager.forceRTL(language === 'en' ? true : false);
  Restart.restart();
};

export {changeLanguage};
