import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEN from "./locales/en/translation.json";
import translationsRU from "./locales/ru/translation.json";

i18n.use(initReactI18next).init<unknown>({
  resources: {
    en: {
      translation: translationsEN,
    },
    ru: {
      translation: translationsRU,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});
