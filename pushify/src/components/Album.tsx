import React, { FC, useState } from "react";
import { AlbumDiv, Albums, Artist } from "./styles/MainStyles";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { AlbumProps } from "../utils/Interface";

export const Album: FC<AlbumProps> = ({ src, artist, albumId, tracklist }) => {
  const [visibility, setVisibility] = useState<string>("none");

  const navigate: NavigateFunction = useNavigate();

  const ico: object = {
    fontSize: "2em",
    color: "#ffffff65",
    position: "absolute",
    right: 20,
    display: visibility,
  };

  const handleMouseOver = (e: React.MouseEvent) => {
    setVisibility("block");
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setVisibility("none");
  };

  const handleNavigate = (e: React.MouseEvent) => {
    navigate(`album/${e.currentTarget.id}`, {
      state: {
        cover: src,
        artist: artist,
        tracklist: tracklist,
      },
    });
  };

  return (
    <>
      <AlbumDiv
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        id={`${albumId}`}
        onClick={handleNavigate}
      >
        <Albums src={src}></Albums>
        <Artist>{artist}</Artist>
        <i style={ico} className="fa-regular fa-circle-play fa-beat"></i>
      </AlbumDiv>
    </>
  );
};
