import React, { FC, useEffect, useState } from "react";
import { ApiResponse, TrackData, stateProps } from "../utils/Interface";
import { List } from "./styles/SideMenuStyles";
import { Track } from "./Track";
import { H3, LoadMoreLess } from "./styles/SongViewStyles";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

export const PopularTracks: FC<stateProps> = ({ artist }) => {
  const [data, setData] = useState<ApiResponse>();
  const [limit, setLimit] = useState<number>(5);
  const { t }: { t: TFunction } = useTranslation();

  const heroku: string = `https://cors-anywhere.herokuapp.com/`;
  const baseUrl: string = `https://api.deezer.com/search?q=${artist}&limit=${limit}`;

  const getData = async (): Promise<ApiResponse> => {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    getData()
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [limit]);

  const handleLoadMore = (e: React.MouseEvent) => {
    setLimit(10);
  };

  const handleLoadLess = (e: React.MouseEvent) => {
    setLimit(5);
  };

  return (
    <>
      <H3>{t("popular")}:</H3>
      <List>
        {data?.data.map((d: TrackData, idx: number) => (
          <Track d={d} idx={idx} key={idx} />
        ))}
      </List>
      {limit === 5 ? (
        <LoadMoreLess onClick={handleLoadMore}>{t("showMore")}</LoadMoreLess>
      ) : (
        <LoadMoreLess onClick={handleLoadLess}>{t("showLess")}</LoadMoreLess>
      )}
    </>
  );
};
