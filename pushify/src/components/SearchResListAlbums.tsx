import React, { FC } from "react";
import { SearchResults } from "../utils/Interface";
import { ArtistContainer, ArtistName, GenrePic } from "./styles/SearchStyles";
import { SingleTrackCont, TitleBox } from "./styles/TrackListStyles";
import { BoxCol } from "./styles/PlayerStyles";

export const SearchResListAlbums: FC<SearchResults> = ({
  album,
  artist,
  title,
  id,
}) => {
  return (
    <>
      <SingleTrackCont>
        <TitleBox>
          <img src={album.cover_small} />
          <BoxCol>
            <ArtistName>{artist.name}</ArtistName>
            <p>{title}</p>
          </BoxCol>
        </TitleBox>
      </SingleTrackCont>
    </>
  );
};
