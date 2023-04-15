import React, { FC, useState } from "react";
import { AlbumDiv, Albums, Artist } from "./styles/MainStyles";
import { useNavigate } from "react-router-dom";

interface AlbumProps {
  src: string;
  artist: string;
  albumId: number;
}

export const Album: FC<AlbumProps> = ({ src, artist, albumId }) => {
  const [visibility, setVisibility] = useState<string>("none");

  const navigate = useNavigate();

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
    navigate(`album/${e.currentTarget.id}`);
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
