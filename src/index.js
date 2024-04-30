import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import "./index.css";

import i18next from "i18next";

//language
import global_en from "./translations/en/global.json";
import global_hi from "./translations/hi/global.json";
import global_ma from "./translations/ma/global.json";
import global_gu from "./translations/gu/global.json";
import global_mu from "./translations/mu/global.json";
import global_tu from "./translations/tu/global.json";
import global_ka from "./translations/ka/global.json";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "English",
  resources: {
    English: {
      global: global_en,
    },
    Hindi: {
      global: global_hi,
    },
    Marathi: {
      global: global_ma,
    },
    Gujarati: {
      global: global_gu,
    },
    Malayalam: {
      global: global_mu,
    },
    Telugu: {
      global: global_tu,
    },
    Kannada: {
      global: global_ka,
    },
  },
});

ReactDOM.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
);
