import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./src/views/Index";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { Settings } from "./src/views/Settings";
import i18next from "i18next";
import Backend from "i18next-http-backend";
import { I18nextProvider } from "react-i18next";
import { ViewAlbum } from "./src/views/ViewAlbum";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  color: rgb(212, 212, 212);
}
p{
  font-size: 14px;
}
`;

export const App: FC = () => {
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

  return (
    <>
      <I18nextProvider i18n={i18next}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="album">
              <Route path=":id" element={<ViewAlbum />} />
            </Route>
            <Route path="settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </>
  );
};
const container: any = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
