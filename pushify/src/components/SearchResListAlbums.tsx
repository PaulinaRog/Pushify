import React, { FC } from "react";
import { SearchResults } from "../utils/Interface";
import { ArtistContainer, ArtistName, GenrePic } from "./styles/SearchStyles";
import { SingleTrackCont } from "./styles/TrackListStyles";

export const SearchResListAlbums: FC<SearchResults> = ({ album, artist }) => {
  return (
    <>
      <SingleTrackCont>
        <img src={album.cover_small} />
        <ArtistName>{artist.name}</ArtistName>
        <p>{album.title}</p>
      </SingleTrackCont>
    </>
  );
};
