import React, { FC } from "react";
import { SearchResults } from "../utils/Interface";
import { H2 } from "./styles/MainStyles";
import {
  ArtistContainer,
  ArtistName,
  ArtistPic,
  GenrePic,
} from "./styles/SearchStyles";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const SearchResListArtist: FC<SearchResults> = ({ artist, album }) => {
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

  return (
    <>
      <ArtistContainer>
        <ArtistPic
          onClick={handleClick}
          src={artist.picture_medium}
        ></ArtistPic>
        <ArtistName onClick={handleClick}>{artist.name}</ArtistName>
      </ArtistContainer>
    </>
  );
};
