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
  },
});

ReactDOM.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
);
