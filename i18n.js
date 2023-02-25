import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import jpTranslation from "./locales/jp.json";

const resources = {
  en: { translation: enTranslation },
  jp: { translation: jpTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "jp",
  fallbackLng: "jp",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
