import React, { FC, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Logo, Aside, List, Li } from "./styles/SideMenuStyles";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

export const SideMenu: FC = () => {
  const [animate, setAnimate] = useState<string>("");

  const navigate: NavigateFunction = useNavigate();
  const { t }: { t: TFunction } = useTranslation();

  const handleNavigate = (e: React.MouseEvent) => {
    navigate("/");
  };

  const handleGoToSearch = (e: React.MouseEvent) => {
    navigate("/search");
  };

  const handleMouseOver = (e: React.MouseEvent) => {
    setAnimate("fa-beat");
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setAnimate("");
  };

  const ico: object = { paddingRight: 20 };

  return (
    <Aside>
      <Logo
        onClick={handleNavigate}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <i className={`fa-brands fa-pushed ${animate}`}></i> Pushify
      </Logo>
      <List>
        <Li onClick={handleNavigate}>
          <i style={ico} className="fa-solid fa-house"></i> {t("home")}
        </Li>
        <Li onClick={handleGoToSearch}>
          <i style={ico} className="fa-solid fa-magnifying-glass"></i>{" "}
          {t("search")}
        </Li>
        <Li>
          <i style={ico} className="fa-solid fa-book-bookmark"></i>{" "}
          {t("library")}
        </Li>
      </List>
    </Aside>
  );
};
