import React, { FC } from "react";
import { Player } from "./Player";
import { TopNav } from "./TopNav";
import { SideMenu } from "./SideMenu";
import { LayoutProps } from "../utils/Interface";

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <TopNav />
      <SideMenu />
      <Player />
    </>
  );
};
