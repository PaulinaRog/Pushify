import React, { FC, useState, useEffect, forwardRef } from "react";
import { CurrentTimeProps } from "../utils/Interface";
import { TitleBox } from "./styles/TrackListStyles";
import { Length, LengthBox, PlayedLength } from "./styles/PlayerStyles";
import { TrackListState } from "../utils/Interface";
import { useSelector } from "react-redux";

export const CurrentTime: FC<CurrentTimeProps> = forwardRef(
  ({ audioRef, isPlaying, setPlay, ico }, ref) => {
    const [time, setTime] = useState<number>(0);
    const [played, setPlayed] = useState<number>(0);
    const [left, setLeft] = useState<number>(120);
    const trackData = useSelector(
      (state: TrackListState) => state.trackList.trackData
    );

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

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(audioRef.current ? audioRef.current.currentTime : 0);
        if (isPlaying) {
          setPlayed(audioRef.current ? audioRef.current.currentTime * 4 : 0);
          setLeft(
            audioRef.current ? 120 - audioRef.current.currentTime * 4 : 0
          );
        }
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }, [audioRef, isPlaying, setPlay]);

    return (
      <>
        <TitleBox>
          <p>{secondsToMinutes(time)}</p>
          <LengthBox>
            <PlayedLength style={{ width: played }}></PlayedLength>
            <Length style={{ width: left }}></Length>
          </LengthBox>
          <p>{secondsToMinutes(trackData?.duration)}</p>
        </TitleBox>
      </>
    );
  }
);
