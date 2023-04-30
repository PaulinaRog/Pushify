import React, { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  BoxCol,
  PlayerBox,
  PlayerBtn,
  PlayerContainer,
} from "./styles/PlayerStyles";
import { TrackListState } from "../utils/Interface";
import { TitleBox } from "./styles/TrackListStyles";
import { Artist } from "./styles/MainStyles";
import { NavButtonsContainer } from "./styles/TopNavStyles";
import { CurrentTime } from "./CurrentTime";
import { VolumeChanger } from "./VolumeChanger";

export const Player: FC = () => {
  const trackData = useSelector(
    (state: TrackListState) => state.trackList.trackData
  );

  const [ico, setIco] = useState<string | null>(null);
  const [play, setPlay] = useState<React.ReactNode | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const url = trackData && trackData.preview;
  const audioRef = useRef<HTMLAudioElement>(url);

  const handleClickPlay = (e: React.MouseEvent) => {
    setPlay(<i className={`fa-regular fa-circle-pause ${ico}`}></i>);
    audioRef.current.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    const handleAudioEnded = () => {
      setPlay(null);
      setIsPlaying(false);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleAudioEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, [audioRef.current]);

  const handleMouseOver = (e: React.MouseEvent) => {
    setIco("fa-beat-fade");
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setIco(null);
  };

  const handleClickPause = (e: React.MouseEvent) => {
    setPlay(null);
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <>
      {trackData && (
        <>
          <PlayerContainer>
            <TitleBox style={{ width: "30vw" }}>
              <img src={trackData?.album.cover_small} />
              <BoxCol>
                <Artist>{trackData.artist.name}</Artist>
                <p>{trackData?.title}</p>
              </BoxCol>
            </TitleBox>
            <PlayerBox>
              <NavButtonsContainer>
                <PlayerBtn>
                  <audio src={url} ref={audioRef} />
                  {!play ? (
                    <i
                      className={`fa-regular fa-circle-play ${ico}`}
                      onMouseOver={handleMouseOver}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleClickPlay}
                    ></i>
                  ) : (
                    <i
                      className={`fa-regular fa-circle-pause ${ico}`}
                      onMouseOver={handleMouseOver}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleClickPause}
                    ></i>
                  )}
                </PlayerBtn>
              </NavButtonsContainer>
              <CurrentTime
                audioRef={audioRef}
                isPlaying={isPlaying}
                setPlay={setPlay}
                ico={ico}
              />
            </PlayerBox>

            <VolumeChanger audioRef={audioRef} />
          </PlayerContainer>
        </>
      )}
    </>
  );
};
