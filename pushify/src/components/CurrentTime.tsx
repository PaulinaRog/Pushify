import React, { FC, useState, useEffect, forwardRef } from "react";
import { CurrentTimeProps } from "../utils/Interface";
import { TitleBox } from "./styles/TrackListStyles";
import { RangeInput } from "./styles/PlayerStyles";
import { TrackListState } from "../utils/Interface";
import { useSelector } from "react-redux";

export const CurrentTime: FC<CurrentTimeProps> = forwardRef(
  ({ audioRef }, ref) => {
    const [time, setTime] = useState<number>(0);
    const [bgSize, setBgSize] = useState<string>("0%");

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
        setBgSize(`${audioRef.current?.currentTime}%`);
        setTime(Number(audioRef.current?.currentTime));
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }, [audioRef.current?.currentTime]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value: string = e.currentTarget.value;
      audioRef.current && (audioRef.current.currentTime = Number(value) / 100);
      setBgSize(`${Number(audioRef.current?.currentTime) * 100}%`);
    };

    return (
      <>
        <TitleBox>
          <p>{secondsToMinutes(time)}</p>
          <RangeInput
            type="range"
            defaultValue={0}
            onChange={handleChange}
            style={{ backgroundSize: bgSize }}
          ></RangeInput>
          <p>{secondsToMinutes(trackData?.duration)}</p>
        </TitleBox>
      </>
    );
  }
);
