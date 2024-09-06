import i18next from "i18next";
import global_en from "./translations/en/global.js";
import global_fr from "./translations/fr/global.js";

i18next.init({
  interpolation: { escapValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    fr: {
      global: global_fr,
    },
  },
});
