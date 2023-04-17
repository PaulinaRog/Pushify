import React, { FC } from "react";
import { MainContainer, H1, LibrariesList } from "./styles/MainStyles";
import { useTranslation } from "react-i18next";
import { albums } from "../utils/Albums";
import { Album } from "./Album";
import { TFunction } from "i18next";

export const Main: FC = () => {
  const { t }: { t: TFunction } = useTranslation();

  const d: any = new Date();
  const hour: number = d.getHours();

  let greeting: string = "";

  if (hour >= 5 && hour < 12) {
    greeting = t("gm");
  } else if (hour >= 12 && hour < 18) {
    greeting = t("ga");
  } else {
    greeting = t("ge");
  }

  return (
    <MainContainer>
      <H1>{greeting}</H1>
      <LibrariesList>
        {albums.map((a) => {
          return (
            <Album key={a.id} albumId={a.id} src={a.src} artist={a.artist} />
          );
        })}
      </LibrariesList>
    </MainContainer>
  );
};
