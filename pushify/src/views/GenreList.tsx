import React, { FC, useEffect, useState } from "react";
import { GenreData, RadioData, RouteParams, Title } from "../utils/Interface";
import { Location, useLocation, useParams } from "react-router-dom";
import { TopNav } from "../components/TopNav";
import { SideMenu } from "../components/SideMenu";
import { H1, H2, MainContainer } from "../components/styles/MainStyles";
import {
  RadioAlbum,
  RadioArtist,
  RadioBigContainer,
  RadioContainer,
  RadioPic,
} from "../components/styles/GenreListStyles";
import { GenreAlbum } from "../components/GenreAlbum";

export const GenreList: FC = () => {
  const [data, setData] = useState<RadioData | null>(null);
  const { id } = useParams<RouteParams>();
  const location: Location = useLocation();
  const state: string = location.state.title;

  const api: string = `https://api.deezer.com/radio/${id}/tracks`;
  const baseUrl: string = `https://cors-anywhere.herokuapp.com/${api}`;

  const getData = async (): Promise<RadioData> => {
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
      <TopNav />
      <SideMenu />
      <MainContainer>
        <H1>{state}</H1>
        <RadioBigContainer>
          {data &&
            data.data.map((d) => {
              return (
                <GenreAlbum
                  key={d.album.id}
                  album={d.album}
                  artist={d.artist}
                />
              );
            })}
        </RadioBigContainer>
      </MainContainer>
    </>
  );
};
