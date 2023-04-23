import React, { FC, useState } from "react";
import {
  RadioAlbum,
  RadioArtist,
  RadioContainer,
  RadioPic,
} from "./styles/GenreListStyles";
import { RadioDataData } from "../utils/Interface";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const GenreAlbum: FC<RadioDataData> = ({ album, artist }) => {
  const [bg, setBg] = useState<object>({});
  const navigate: NavigateFunction = useNavigate();

  const handleMouseOver = (e: React.MouseEvent) => {
    setBg({ backgroundColor: "#ffffff45" });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setBg({});
  };

  const handleClick = (e: React.MouseEvent) => {
    navigate(`/album/${album.id}`, {
      state: {
        cover: album.cover_medium,
        artist: artist.name,
        tracklist: artist.tracklist,
      },
    });
  };

  console.log(artist.tracklist);

  return (
    <>
      <RadioContainer
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={bg}
      >
        <RadioPic src={album.cover_medium}></RadioPic>
        <RadioArtist>{artist.name}</RadioArtist>
        <RadioAlbum>{album.title}</RadioAlbum>
      </RadioContainer>
    </>
  );
};
