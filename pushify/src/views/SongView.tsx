import React, { FC, useEffect, useState } from "react";
import { TopNav } from "../components/TopNav";
import { SideMenu } from "../components/SideMenu";
import { Artist, H1, MainContainer } from "../components/styles/MainStyles";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import {
  AlbumContainer,
  AlbumCover,
} from "../components/styles/ViewAlbumStyles";
import { BoxCol } from "../components/styles/PlayerStyles";
import {
  ArtPicMid,
  ArtPicSml,
  FlexGap20,
} from "../components/styles/SearchStyles";
import { TracksContainer } from "../components/styles/TrackListStyles";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import {
  ArtistBox,
  LyricsBox,
  LyricsContainer,
} from "../components/styles/SongViewStyles";
import { ApiResponse, RadioArtist, TrackData } from "../utils/Interface";
import { Lyrics } from "../components/Lyrics";
import { PopularTracks } from "../components/PopularTracks";
import { Player } from "../components/Player";
import { ArtistAlbums } from "../components/ArtistAlbums";
import { Dispatch, SetStateAction } from "react";

export const SongView: FC = () => {
  const location = useLocation();
  const cover: string = location.state.cover;
  const artist: string = location.state.artist;
  const title: string = location.state.title;
  const artPic: string = location.state.artPic;
  const duration: number = location.state.duration;
  const artPicMed: string = location.state.artPicMed;
  const artistId: number = location.state.id;
  const d: TrackData = location.state.d;

  const navigate: NavigateFunction = useNavigate();

  const [data, setData] = useState<RadioArtist>();

  const { t }: { t: TFunction } = useTranslation();

  const click: object = { cursor: "pointer" };

  function secondsToMinutes(time: number) {
    return (
      "0" +
      Math.floor(time / 60) +
      ":" +
      (Math.floor(time % 60) < 10
        ? "0" + Math.floor(time % 60)
        : Math.floor(time % 60))
    );
  }

  const baseUrl: string = `https://api.deezer.com/artist/${artistId}`;
  const heroku: string = `https://cors-anywhere.herokuapp.com/`;

  const getData = async (): Promise<RadioArtist> => {
    const response = await fetch(heroku+baseUrl);
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

  const handleClick = (e: React.MouseEvent) => {
    navigate(`/album/${artistId}`, {
      state: {
        cover: cover,
        artist: artist,
        tracklist: data?.tracklist,
      },
    });
  };

  return (
    <>
      <MainContainer>
        <AlbumContainer>
          <AlbumCover src={cover}></AlbumCover>
          <BoxCol>
            <H1>{title}</H1>
            <FlexGap20>
              <ArtPicSml
                src={artPic ? artPic : data?.picture_small}
              ></ArtPicSml>
              <Artist onClick={handleClick} style={click}>
                {artist}
              </Artist>
              <Artist>{secondsToMinutes(duration)}</Artist>
            </FlexGap20>
          </BoxCol>
        </AlbumContainer>
        <TracksContainer>
          <LyricsContainer>
            <Lyrics artist={artist} title={title} d={d} />
            <ArtistBox>
              <FlexGap20>
                <ArtPicMid
                  src={artPicMed ? artPicMed : data?.picture_medium}
                ></ArtPicMid>
                <BoxCol>
                  <Artist>{t("artist")}</Artist>
                  <h3 onClick={handleClick} style={click}>
                    {artist}
                  </h3>
                </BoxCol>
              </FlexGap20>
            </ArtistBox>
          </LyricsContainer>
          <PopularTracks artist={artist} title={title} d={d} />
          <ArtistAlbums artist={artist} title={title} d={d} />
        </TracksContainer>
      </MainContainer>
      <Player />
    </>
  );
};
