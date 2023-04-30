import React, { FC, useEffect, useState } from "react";
import { stateProps } from "../utils/Interface";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { LyricsBox } from "./styles/SongViewStyles";
import { useDispatch } from "react-redux";
import { updateTrackData } from "../utils/Slice";

export const Lyrics: FC<stateProps> = ({ artist, title, d }) => {
  const apiKey: string = "96c7f77832f3af181363ef3f3e4678c9";
  const heroku: string = `https://cors-anywhere.herokuapp.com/`;
  const [lyrics, setLyrics] = useState<string>("");
  const { t }: { t: TFunction } = useTranslation();
  const dispatch = useDispatch();

  const ico: object = { fontSize: "3em" };

  const searchTrack = async () => {
    try {
      const searchUrl: string = `${heroku}https://api.musixmatch.com/ws/1.1/track.search?q_track=${title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace("?", "")
        .replace("'", "")}&q_artist=${artist
        .toLowerCase()
        .replace(/\s+/g, "-")}&apikey=${apiKey}`;
      const response: Response = await fetch(searchUrl);
      const data = await response.json();
      const trackId: number = data?.message.body.track_list[0].track.track_id;

      const lyricsUrl: string = `${heroku}https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${apiKey}`;
      const lyricsResponse: Response = await fetch(lyricsUrl);
      const lyricsData = await lyricsResponse.json();
      const trackLyrics: string = lyricsData?.message.body.lyrics.lyrics_body;

      setLyrics(trackLyrics);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchTrack();
  }, [title]);

  function createMarkup() {
    return { __html: lyrics.split("\n").join("<br />") };
  }

  const handleClick = (e: React.MouseEvent) => {
    dispatch(updateTrackData(d));
  };

  return (
    <>
      <LyricsBox>
        <i
          style={ico}
          className="fa-regular fa-circle-play"
          onClick={handleClick}
        ></i>
        <h3>{t("lyrics")}</h3>
        <>
          {" "}
          {lyrics ? (
            <div dangerouslySetInnerHTML={createMarkup()}></div>
          ) : (
            <p>{t("notFound")}</p>
          )}
        </>
      </LyricsBox>
    </>
  );
};
