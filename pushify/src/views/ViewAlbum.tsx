import React, { FC, useEffect, useState } from "react";
import { SideMenu } from "../components/SideMenu";
import { TopNav } from "../components/TopNav";
import { H1, MainContainer } from "../components/styles/MainStyles";
import { useParams } from "react-router-dom";
import { albums } from "../utils/Albums";
import {
  AlbumContainer,
  AlbumCover,
} from "../components/styles/ViewAlbumStyles";
import { TrackList } from "../components/TrackList";
import { Player } from "../components/Player";

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

export const ViewAlbum: FC = () => {
  const { id } = useParams<RouteParams>();
  const [data, setData] = useState<any>(null);

  const api = albums[Number(id) - 1].api;

  const getData = async () => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${api}`);
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
      <SideMenu />
      <TopNav />
      <Player />
      <MainContainer>
        <AlbumContainer>
          <AlbumCover src={albums[Number(id) - 1].src}></AlbumCover>
          <H1>{albums[Number(id) - 1].artist}</H1>
        </AlbumContainer>
        {data && <TrackList data={data} />}
      </MainContainer>
    </>
  );
};
