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
import en from "../pushify/i18next/en.json";
import pl from "../pushify/i18next/pl.json";
import { Provider } from "react-redux";
import store from "./src/utils/Store";
import { SearchEngine } from "./src/views/SearchEngine";
import { GenreList } from "./src/views/GenreList";
import { GenreTracks } from "./src/components/GenreTracks";
import { SongView } from "./src/views/SongView";
import { Layout } from "./src/components/Layout";

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
    resources: {
      en: { translation: en },
      pl: { translation: pl },
    },
    backend: {
      loadPath: "../i18next/{{lng}}.json",
    },
  });

  return (
    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <GlobalStyle />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="album">
                  <Route path=":id" element={<ViewAlbum />} />
                </Route>
                <Route path="search" element={<SearchEngine />} />
                <Route path="settings" element={<Settings />} />
                <Route path="genres" element={<GenreList />}>
                  <Route path=":id" element={<GenreTracks />} />
                </Route>
                <Route path="track">
                  <Route path=":id" element={<SongView />} />
                </Route>
              </Routes>
            </Layout>
          </BrowserRouter>
        </I18nextProvider>
      </Provider>
    </>
  );
};
const container: any = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
