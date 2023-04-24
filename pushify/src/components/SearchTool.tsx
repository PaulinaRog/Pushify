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
  const baseUrl: string = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${inputValue}&limit=5`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const getData = async (): Promise<ApiSearch> => {
    const response = await fetch(baseUrl);
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

  const reducedNames = data?.data.map((a) => a.artist.name);

  const artistsReduced = reducedNames?.reduce((acc: any, a: string) => {
    if (!acc.includes(a)) {
      acc.push(a);
    }
    return acc;
  }, []);

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
            {data.data.map((d) => {
              return (
                <SearchResListArtist
                  key={d.album.id}
                  artist={d.artist}
                  album={d.album}
                />
              );
            })}
          </SearchResults>
          <AlbumsContainer>
            {data.data.map((al) => {
              return (
                <SearchResListAlbums
                  key={al.album.id}
                  artist={al.artist}
                  album={al.album}
                />
              );
            })}
          </AlbumsContainer>
        </SearchEngineResBox>
      )}
    </>
  );
};
