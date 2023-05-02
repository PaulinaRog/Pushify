import React, { FC, useEffect, useState } from "react";
import { SideMenu } from "../components/SideMenu";
import { TopNav } from "../components/TopNav";
import { H1, MainContainer } from "../components/styles/MainStyles";
import { useLocation, useParams } from "react-router-dom";
import {
  AlbumContainer,
  AlbumCover,
} from "../components/styles/ViewAlbumStyles";
import { TrackList } from "../components/TrackList";
import { Player } from "../components/Player";
import { RouteParams } from "../utils/Interface";
import { ApiResponse } from "../utils/Interface";

export const ViewAlbum: FC = () => {
  const { id } = useParams<RouteParams>();
  const [data, setData] = useState<ApiResponse | null>(null);
  const location = useLocation();
  const cover: string = location.state.cover;
  const artist: string = location.state.artist;
  const tracklist: string = location.state.tracklist;

  const api: string = tracklist;
  const baseUrl: string = `${api}`;
  const heroku: string = `https://cors-anywhere.herokuapp.com/`;

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
  }, [id]);

  return (
    <>
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
