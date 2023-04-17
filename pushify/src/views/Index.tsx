import React, { FC } from "react";
import { SideMenu } from "../components/SideMenu";
import { Main } from "../components/Main";
import { TopNav } from "../components/TopNav";
import { Player } from "../components/Player";

export const Index: FC = () => {
  return (
    <>
      <SideMenu />
      <TopNav />
      <Main />
      <Player />
    </>
  );
};
