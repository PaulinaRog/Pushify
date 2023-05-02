import React, { FC, useEffect, useState } from "react";
import { SideMenu } from "../components/SideMenu";
import { TopNav } from "../components/TopNav";
import { H2, MainContainer } from "../components/styles/MainStyles";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { GenresContainer } from "../components/styles/SearchStyles";
import { Genre } from "../utils/Interface";
import { Genres } from "../components/Genres";
import { SearchTool } from "../components/SearchTool";

export const SearchEngine: FC = () => {
  const { t }: { t: TFunction } = useTranslation();
  const [data, setData] = useState<Genre | null>(null);
  const api: string = "https://api.deezer.com/radio";
  const heroku: string = `https://cors-anywhere.herokuapp.com/`;

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
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <MainContainer>
        <SearchTool />
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
