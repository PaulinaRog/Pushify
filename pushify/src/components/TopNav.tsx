import React, { FC, useState } from "react";
import {
  DropdownLI,
  DropdownUL,
  Nav,
  NavButtons,
  NavButtonsContainer,
  Pfp,
  Profile,
} from "./styles/TopNavStyles";
import { useTranslation } from "react-i18next";
import pfp from "../assets/pfp.jpg";
import { useNavigate } from "react-router-dom";

export const TopNav: FC = () => {
  const ico: object = { fontSize: "1.5em" };

  const [dropdown, setDropdown] = useState<object>({ display: "none" });
  const [check, setCheck] = useState<boolean>(false);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (check === false) {
      setDropdown({ display: "block" });
      setCheck(true);
    } else if (check === true) {
      setDropdown({ display: "none" });
      setCheck(false);
    }
  };

  const handleNavigate = (e: React.MouseEvent) => {
    navigate(e.currentTarget.id);
  };

  return (
    <>
      <Nav>
        <NavButtonsContainer>
          <NavButtons data-title={t("back") || ""} onClick={() => navigate(-1)}>
            <i style={ico} className="fa-solid fa-chevron-left"></i>
          </NavButtons>
          <NavButtons data-title={t("next") || ""} onClick={() => navigate(+1)}>
            <i style={ico} className="fa-solid fa-chevron-right"></i>
          </NavButtons>
        </NavButtonsContainer>
        <Profile onClick={handleClick}>
          <Pfp src={pfp}></Pfp>Puszek
          {check === false ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </Profile>
        <DropdownUL style={dropdown}>
          <DropdownLI>{t("profile")}</DropdownLI>
          <DropdownLI onClick={handleNavigate} id={"/settings"}>
            {t("settings")}
          </DropdownLI>
        </DropdownUL>
      </Nav>
    </>
  );
};
