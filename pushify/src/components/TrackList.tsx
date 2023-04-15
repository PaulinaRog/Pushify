import React, { FC } from "react";
import {
  TitleBox,
  SingleTrackCont,
  TracksContainer,
  Idx,
  Box,
  TracksHeader,
  DecorLine,
} from "./styles/TrackListStyles";
import { Li, List } from "./styles/SideMenuStyles";
import { Track } from "./Track";
import { useTranslation } from "react-i18next";

interface AlbumData {
  data: any;
}

export const TrackList: FC<AlbumData> = ({ data }) => {
  const { t } = useTranslation();

  console.log(data);

  return (
    <TracksContainer>
      <TracksHeader>
        <TitleBox>
          <Idx>
            <p>#</p>
          </Idx>
          <p>{t("title")}</p>
        </TitleBox>
        <Box>
          <p>{t("album")}</p>
          <p>{t("duration")}</p>
        </Box>
      </TracksHeader>
      <DecorLine></DecorLine>
      <List>
        {data.data.map((d: any, idx: number) => (
          <>
            <Track d={d} idx={idx} key={idx} />
          </>
        ))}
      </List>
    </TracksContainer>
  );
};
