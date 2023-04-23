import React, { FC, useEffect, useState } from "react";
import { SideMenu } from "../components/SideMenu";
import { TopNav } from "../components/TopNav";
import { H1, MainContainer } from "../components/styles/MainStyles";
import { Location, useLocation } from "react-router-dom";
import {
  AlbumContainer,
  AlbumCover,
} from "../components/styles/ViewAlbumStyles";
import { TrackList } from "../components/TrackList";
import { Player } from "../components/Player";
import { ApiResponse } from "../utils/Interface";

export const RadioAlbums: FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const location: Location = useLocation();
  const cover: string = location.state.cover;
  const artist: string = location.state.artist;
  const tracklist: string = location.state.tracklist;

  const api: string = tracklist;
  const baseUrl: string = `${api}`;

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

  return (
    <>
      <SideMenu />
      <TopNav />
      <Player />
      <MainContainer>
        <AlbumContainer>
          <AlbumCover src={cover}></AlbumCover>
          <H1>{artist}</H1>
        </AlbumContainer>
        {data && <TrackList data={data} />}
      </MainContainer>
    </>
  );
};
