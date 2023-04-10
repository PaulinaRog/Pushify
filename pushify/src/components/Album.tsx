import React, { FC, useState } from "react";
import { AlbumDiv, Albums, Artist } from "./styles/MainStyles";

interface AlbumProps {
  src: string;
  artist: string;
}

export const Album: FC<AlbumProps> = ({ src, artist }) => {
  const [visibility, setVisibility] = useState<string>("none");

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

  return (
    <>
      <AlbumDiv onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <Albums src={src}></Albums>
        <Artist>{artist}</Artist>
        <i style={ico} className="fa-regular fa-circle-play fa-beat"></i>
      </AlbumDiv>
    </>
  );
};
