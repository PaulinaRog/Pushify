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
        if (audioRef.current) {
          setBgSize(`${audioRef.current.currentTime}%`);
          setTime(Number(audioRef.current.currentTime));
        }
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }, [audioRef.current?.currentTime]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value: number = Number(e.currentTarget.value) / 100;
      audioRef.current &&
        (audioRef.current.currentTime = value * trackData.duration);
      setBgSize(`${value * 100}%`);
    };

    return (
      <>
        <TitleBox>
          <p>{secondsToMinutes(time)}</p>
          <RangeInput
            type="range"
            defaultValue={0}
            min={0}
            max={100}
            step={0.1}
            onChange={handleChange}
            style={{ backgroundSize: bgSize, width: 400 }}
          ></RangeInput>
          <p>{secondsToMinutes(trackData?.duration)}</p>
        </TitleBox>
      </>
    );
  }
);
