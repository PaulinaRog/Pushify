import React, { FC } from "react";
import { SearchResults } from "../utils/Interface";
import { ArtistContainer, ArtistName, GenrePic } from "./styles/SearchStyles";
import { SingleTrackCont, TitleBox } from "./styles/TrackListStyles";
import { BoxCol } from "./styles/PlayerStyles";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const SearchResListAlbums: FC<SearchResults> = ({
  album,
  artist,
  title,
  id,
  duration,
  al,
}) => {
  const navigate: NavigateFunction = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    navigate(`/album/${album.id}`, {
      state: {
        cover: album.cover_medium,
        artist: artist.name,
        tracklist: artist.tracklist,
      },
    });
  };

  const handleClickSong = (e: React.MouseEvent) => {
    navigate(`/track/${id}`, {
      state: {
        cover: album.cover_medium,
        artist: artist.name,
        title: title,
        artPic: artist.picture_small,
        duration: duration,
        artPicMed: artist.picture_medium,
        d: al,
      },
    });
  };

  return (
    <>
      <SingleTrackCont>
        <TitleBox>
          <img src={album.cover_small} />
          <BoxCol>
            <ArtistName onClick={handleClick}>{artist.name}</ArtistName>
            <p onClick={handleClickSong}>{title}</p>
          </BoxCol>
        </TitleBox>
      </SingleTrackCont>
    </>
  );
};
