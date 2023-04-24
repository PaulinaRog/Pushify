import React, { FC } from "react";
import { SearchResults } from "../utils/Interface";
import { H2 } from "./styles/MainStyles";
import {
  ArtistContainer,
  ArtistName,
  ArtistPic,
  GenrePic,
} from "./styles/SearchStyles";

export const SearchResListArtist: FC<SearchResults> = ({ artist }) => {
  return (
    <>
      <ArtistContainer>
        <ArtistPic src={artist.picture_medium}></ArtistPic>
        <ArtistName>{artist.name}</ArtistName>
      </ArtistContainer>
    </>
  );
};
