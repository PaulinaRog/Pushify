import React, { FC, useState } from "react";
import { Box, Idx, SingleTrackCont, TitleBox } from "./styles/TrackListStyles";
import { Li } from "./styles/SideMenuStyles";
import { Bar1, Bar2, Bar3, BarsContainer } from "./styles/PlayerStyles";
import { TrackProps } from "../utils/Interface";
import { useDispatch } from "react-redux";
import { updateTrackData } from "../utils/Slice";
import { TrackData } from "../utils/Interface";
import { useNavigate } from "react-router-dom";

export const Track: FC<TrackProps> = ({ d, idx }) => {
  const [play, setPlay] = useState<React.ReactNode>(<p>{idx + 1}</p>);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleClickSong = (e: React.MouseEvent) => {
    navigate(`/track/${d.artist.id + d.album.id}`, {
      state: {
        cover: d.album.cover_medium,
        artist: d.artist.name,
        title: d.title,
        artPic: d.artist.picture_small,
        duration: d.duration,
        artPicMed: d.artist.picture_medium,
        id: d.artist.id,
        d: d,
      },
    });
    window.location.reload();
  };

  return (
    <>
      <SingleTrackCont
        onMouseOver={handlemouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={(e: React.MouseEvent) => handleUpdate(d)}
      >
        {d.album && (
          <>
            {" "}
            <TitleBox style={{ width: "48%" }}>
              <Idx>{play}</Idx>
              <img src={d.album.cover_small} />
              <Li onClick={handleClickSong}>{d.title}</Li>
            </TitleBox>
            <Box>
              <p>{d.album.title && d.album.title}</p>
              <p>{secondsToMinutes(d.duration)}</p>
            </Box>
          </>
        )}
      </SingleTrackCont>
    </>
  );
};
