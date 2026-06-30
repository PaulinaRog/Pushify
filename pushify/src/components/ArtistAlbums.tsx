import React, { FC, useEffect, useState } from "react";
import {
  Album,
  ApiResponse,
  ReducedAlbums,
  stateProps,
} from "../utils/Interface";
import {
  RadioAlbum,
  RadioArtist,
  RadioBigContainer,
  RadioContainer,
  RadioPic,
} from "./styles/GenreListStyles";
import { H3 } from "./styles/SongViewStyles";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { deezerApiUrl } from "../utils/apiProxy";

export const ArtistAlbums: FC<stateProps> = ({ artist }) => {
  const [data, setData] = useState<ApiResponse>();
  const [albums, setAlbums] = useState<ReducedAlbums[]>([]);
  const { t }: { t: TFunction } = useTranslation();

  const baseUrl: string = deezerApiUrl(
    `/search?q=${encodeURIComponent(artist)}`
  );

  const getData = async (): Promise<ApiResponse> => {
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

  useEffect(() => {
    if (data?.data) {
      const uniqueAlbums = new Map();
      data.data.forEach((d) => {
        const album = d.album;
        if (!uniqueAlbums.has(album.id)) {
          uniqueAlbums.set(album.id, {
            id: album.id,
            title: album.title,
            cover: album.cover_medium,
            tracklist: album.tracklist,
          });
        }
      });
      setAlbums(Array.from(uniqueAlbums.values()));
    }
  }, [data]);

  return (
    <>
      <H3>{t("albums")}</H3>
      <RadioBigContainer>
        {albums &&
          albums.slice(0, 5).map((a) => {
            return (
              <RadioContainer key={a.id}>
                <RadioPic src={`${a.cover}`}></RadioPic>
                <RadioArtist>{a.title}</RadioArtist>
              </RadioContainer>
            );
          })}
      </RadioBigContainer>
    </>
  );
};
