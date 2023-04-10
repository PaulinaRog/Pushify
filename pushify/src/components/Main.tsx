import React, { FC } from "react";
import {
  MainContainer,
  H1,
  LibrariesList,
  AlbumDiv,
  Albums,
} from "./styles/MainStyles";
import { useTranslation } from "react-i18next";
import { albums } from "../utils/Albums";

export const Main: FC = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <H1>{t("gm")}</H1>
      <LibrariesList>
        {albums.map((a) => {
          return (
            <AlbumDiv key={a.id}>
              <Albums src={a.src}></Albums>
            </AlbumDiv>
          );
        })}
      </LibrariesList>
    </MainContainer>
  );
};
