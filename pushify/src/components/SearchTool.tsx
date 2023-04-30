import React, { FC, useEffect, useState } from "react";
import {
  AlbumsContainer,
  Input,
  PositionedCentr,
  SearchEngineResBox,
  SearchResults,
} from "./styles/SearchStyles";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { ApiSearch } from "../utils/Interface";
import { SearchResListArtist } from "./SearchResListArtist";
import { SearchResListAlbums } from "./SearchResListAlbums";

export const SearchTool: FC = () => {
  const { t }: { t: TFunction } = useTranslation();
  const listen: string = t("listen");
  const ico: object = { paddingRight: 20, fontSize: 20, paddingTop: 5 };
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<ApiSearch | null>(null);

  const inputValue: string = `${value}`;
  const heroku: string = `https://cors-anywhere.herokuapp.com/`;
  const baseUrl: string = `https://api.deezer.com/search?q=${inputValue}&limit=5`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const getData = async (): Promise<ApiSearch> => {
    const response = await fetch(heroku + baseUrl);
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    if (value !== "") {
      getData()
        .then((res) => {
          setData(res);
          console.log(res);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }, [value]);

  return (
    <>
      <PositionedCentr>
        <i style={ico} className="fa-solid fa-magnifying-glass"></i>
        <Input
          placeholder={`${listen}?`}
          onChange={handleChange}
          value={value}
        ></Input>
      </PositionedCentr>
      {data && (
        <SearchEngineResBox>
          <SearchResults>
            <SearchResListArtist
              artist={data.data[0].artist}
              album={data.data[0].album}
              title={data.data[0].title}
              id={data.data[0].id}
              duration={data.data[0].duration}
            />
          </SearchResults>
          <AlbumsContainer>
            {data.data.map((al) => {
              return (
                <SearchResListAlbums
                  key={al.id}
                  artist={al.artist}
                  album={al.album}
                  title={al.title}
                  id={al.id}
                  duration={al.duration}
                />
              );
            })}
          </AlbumsContainer>
        </SearchEngineResBox>
      )}
    </>
  );
};
