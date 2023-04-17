import React, { FC, useState } from "react";
import { Box, Idx, SingleTrackCont, TitleBox } from "./styles/TrackListStyles";
import { Li } from "./styles/SideMenuStyles";
import { Bar1, Bar2, Bar3, BarsContainer } from "./styles/PlayerStyles";
import { TrackProps } from "../utils/Interface";
import { useDispatch } from "react-redux";
import { updateTrackData } from "../utils/Slice";
import { TrackData } from "../utils/Interface";

export const Track: FC<TrackProps> = ({ d, idx }) => {
  const [play, setPlay] = useState<React.ReactNode>(<p>{idx + 1}</p>);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const dispatch = useDispatch();

  function secondsToMinutes(time: number) {
    return (
      "0" +
      Math.floor(time / 60) +
      ":" +
      (Math.floor(time % 60) < 10
        ? "0" + Math.floor(time % 60)
        : Math.floor(time % 60))
    );
  }

  const handlemouseOver = (e: React.MouseEvent) => {
    if (!isPlaying) {
      setPlay(<i className="fa-solid fa-play" onClick={handleClick}></i>);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!isPlaying) {
      setPlay(<p>{idx + 1}</p>);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    setIsPlaying(true);
    setPlay(
      <BarsContainer>
        <Bar1></Bar1>
        <Bar2></Bar2>
        <Bar3></Bar3>
      </BarsContainer>
    );
  };

  const handleUpdate = (d: TrackData) => {
    dispatch(updateTrackData(d));
  };

  return (
    <>
      <SingleTrackCont
        onMouseOver={handlemouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={(e: React.MouseEvent) => handleUpdate(d)}
      >
        <TitleBox>
          <Idx>{play}</Idx>
          {d.album && <img src={d.album.cover_small} />}
          <Li>{d.title}</Li>
        </TitleBox>
        <Box>
          <p>{d.album.title}</p>
          <p>{secondsToMinutes(d.duration)}</p>
        </Box>
      </SingleTrackCont>
    </>
  );
};
