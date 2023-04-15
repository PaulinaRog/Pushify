import i18next from "i18next";
import Backend from "i18next-http-backend";

const lang: any = localStorage.getItem("language");

i18next.use(Backend).init({
  lng: lang,
  fallbackLng: "pl",
  react: {
    useSuspense: false,
  },
  backend: {
    loadPath: "../i18next/{{lng}}.json",
  },
});
