import React, { FC, forwardRef, useState } from "react";
import { Box } from "./styles/TrackListStyles";
import { RangeInput } from "./styles/PlayerStyles";
import { AudioRef } from "../utils/Interface";

export const VolumeChanger: FC<AudioRef> = forwardRef(({ audioRef }, ref) => {
  const [bgSize, setBgSize] = useState<string>("100%");
  const [silenced, setSilenced] = useState<boolean>(false);
  const [lastPosition, setLastPosition] = useState<string | null>(null);

  const handleChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.currentTarget.value;
    audioRef.current && (audioRef.current.volume = Number(value) / 100);
    setBgSize(`${value}%`);
    setLastPosition(
      audioRef.current && `${(audioRef.current.volume = Number(value) / 100)}`
    );
  };

  const handleMute = (e: React.MouseEvent) => {
    audioRef.current && (audioRef.current.volume = 0 / 100);
    setBgSize("0%");
    setSilenced(true);
  };

  const handleUnmute = (e: React.MouseEvent) => {
    setSilenced(false);
    audioRef.current && (audioRef.current.volume = Number(lastPosition));
    setBgSize(`${Number(lastPosition) * 100}%`);
  };

  const width: object = { width: 40 };

  if (lastPosition) {
    localStorage.setItem("volume", `${lastPosition}`);
  }
  const vol: string | null = localStorage.getItem("volume");

  return (
    <>
      <Box style={{ width: 180 }}>
        {!silenced ? (
          <i
            className="fa-solid fa-volume-low"
            onClick={handleMute}
            style={width}
          ></i>
        ) : (
          <i
            className="fa-solid fa-volume-xmark"
            onClick={handleUnmute}
            style={width}
          ></i>
        )}
        <RangeInput
          type="range"
          value={Number(vol)}
          onChange={handleChangeVolume}
          style={{ backgroundSize: bgSize }}
          disabled={silenced}
        ></RangeInput>
      </Box>
    </>
  );
});
