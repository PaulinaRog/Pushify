import React, { FC } from "react";
import { SearchResults } from "../utils/Interface";
import { H2 } from "./styles/MainStyles";
import { ArtistContainer, ArtistName, GenrePic } from "./styles/SearchStyles";

export const SearchResListArtist: FC<SearchResults> = ({ artist }) => {
  return (
    <>
      <ArtistContainer>
        <GenrePic src={artist.picture_medium}></GenrePic>
        <ArtistName>{artist.name}</ArtistName>
      </ArtistContainer>
    </>
  );
};
