import React, { FC, useEffect, useState } from "react";
import { RadioData, RouteParams } from "../utils/Interface";
import { Location, useLocation, useParams } from "react-router-dom";
import { H1, MainContainer } from "../components/styles/MainStyles";
import { RadioBigContainer } from "../components/styles/GenreListStyles";
import { GenreAlbum } from "../components/GenreAlbum";
import { deezerApiUrl } from "../utils/apiProxy";

export const GenreList: FC = () => {
  const [data, setData] = useState<RadioData | null>(null);
  const { id } = useParams<RouteParams>();
  const location: Location = useLocation();
  const state: string = location.state.title;

  const baseUrl: string = deezerApiUrl(`/radio/${id}/tracks`);

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
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <MainContainer>
        <H1>{state}</H1>
        <RadioBigContainer>
          {data &&
            data.data.map((d) => {
              return (
                <GenreAlbum
                  key={d.album.id + d.artist.id}
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
