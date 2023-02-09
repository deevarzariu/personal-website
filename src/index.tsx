import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import English from "./data/en.json";
import Romanian from "./data/ro.json";

import App from "./App";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: English,
    },
    ro: {
      translation: Romanian,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
