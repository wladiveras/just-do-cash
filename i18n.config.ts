import en from "~~/assets/locales/en.json";
import pt from "~~/assets/locales/pt.json";
import es from "~~/assets/locales/es.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "pt",
  messages: {
    pt,
    en,
    es,
  },
}));
