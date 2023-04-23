import React, { FC, useState } from "react";
import { GenreData } from "../utils/Interface";
import { GenCont, GenName, GenrePic } from "./styles/SearchStyles";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const Genres: FC<GenreData> = ({
  title,
  id,
  picture_medium,
  tracklist,
}) => {
  const [blur, setBlur] = useState<object>({});
  const [opacity, setOpacity] = useState<object>({});
  const navigate: NavigateFunction = useNavigate();

  const handleMouseOver = (e: React.MouseEvent) => {
    setBlur({ filter: "brightness(0.5)" });
    setOpacity({ opacity: 1 });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setBlur({});
    setOpacity({});
  };

  const handleClick = (e: React.MouseEvent) => {
    navigate(`/genres/${e.currentTarget.id}`, {
      state: { title: `${title}` },
    });
  };

  return (
    <>
      <GenCont
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        id={`${id}`}
      >
        <GenName style={opacity}>{title}</GenName>
        <GenrePic src={picture_medium} style={blur}></GenrePic>
      </GenCont>
    </>
  );
};
