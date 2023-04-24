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

  return (
    <>
      <SingleTrackCont>
        <TitleBox>
          <img src={album.cover_small} />
          <BoxCol>
            <ArtistName onClick={handleClick}>{artist.name}</ArtistName>
            <p>{title}</p>
          </BoxCol>
        </TitleBox>
      </SingleTrackCont>
    </>
  );
};
