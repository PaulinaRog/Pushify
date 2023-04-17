import React, { FC } from "react";
import {
  TitleBox,
  TracksContainer,
  Idx,
  Box,
  TracksHeader,
  DecorLine,
} from "./styles/TrackListStyles";
import { List } from "./styles/SideMenuStyles";
import { Track } from "./Track";
import { useTranslation } from "react-i18next";
import { AlbumData, TrackData } from "../utils/Interface";
import { TFunction } from "i18next";

export const TrackList: FC<AlbumData> = ({ data }) => {
  const { t }: { t: TFunction } = useTranslation();

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
        {data.data.map((d: TrackData, idx: number) => (
          <Track d={d} idx={idx} key={idx} />
        ))}
      </List>
    </TracksContainer>
  );
};
