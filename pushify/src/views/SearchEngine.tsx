import React, { FC, useEffect, useState } from "react";
import { SideMenu } from "../components/SideMenu";
import { TopNav } from "../components/TopNav";
import { H1, H2, MainContainer } from "../components/styles/MainStyles";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import {
  GenresContainer,
  Input,
  PositionedCentr,
} from "../components/styles/SearchStyles";
import { Genre } from "../utils/Interface";
import { Genres } from "../components/Genres";

export const SearchEngine: FC = () => {
  const { t }: { t: TFunction } = useTranslation();
  const listen: string = t("listen");
  const ico: object = { paddingRight: 20, fontSize: 20, paddingTop: 5 };
  const [data, setData] = useState<Genre | null>(null);
  const api: string = "https://api.deezer.com/radio";

  const baseUrl: string = `${api}`;

  const getData = async (): Promise<Genre> => {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    getData()
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <SideMenu />
      <TopNav />
      <MainContainer>
        <PositionedCentr>
          <i style={ico} className="fa-solid fa-magnifying-glass"></i>
          <Input placeholder={`${listen}?`}></Input>
        </PositionedCentr>
        <H2>{t("browse")}</H2>
        <>
          <GenresContainer>
            {data &&
              data.data.map((d, idx) => {
                return (
                  <Genres
                    key={idx}
                    id={d.id}
                    title={d.title}
                    picture_medium={d.picture_medium}
                    tracklist={d.tracklist}
                  />
                );
              })}
          </GenresContainer>
        </>
      </MainContainer>
    </>
  );
};