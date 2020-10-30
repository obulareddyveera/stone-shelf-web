import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { createGlobalStyle } from "styled-components";

import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import PublicRoutes from "./routes";
import store from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import EN from "./locale/en";
import HI from "./locale/hi";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: EN
      },
      hi: {
        translation: HI
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

const GlobalStyles = createGlobalStyle`
  @import url('fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf');
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <div className="container-fluid m-0 p-0" style={{ height: "100vh" }}>
        <PublicRoutes />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
