import React, { FC } from "react";
import { SideMenu } from "../components/SideMenu";
import { TopNav } from "../components/TopNav";
import { H1, MainContainer } from "../components/styles/MainStyles";
import { useTranslation } from "react-i18next";
import {
  LanguageH3,
  LanguageH5,
  Option,
  PickLanguage,
  SelectLangContainer,
} from "../components/styles/SettingsStyles";
import i18next, { TFunction } from "i18next";

export const Settings: FC = () => {
  const { t }: { t: TFunction } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18next.changeLanguage(e.currentTarget.value);
    localStorage.setItem("language", e.currentTarget.value);
  };

  return (
    <>
      <MainContainer>
        <H1>{t("settings")}</H1>
        <LanguageH3>{t("language")}</LanguageH3>
        <SelectLangContainer>
          <LanguageH5>{t("languageSet")}:</LanguageH5>
          <PickLanguage onChange={changeLanguage}>
            <Option value={null || ""}>{t("select")}...</Option>
            <Option value="pl">{t("polish")}</Option>
            <Option value="en">{t("english")}</Option>
          </PickLanguage>
        </SelectLangContainer>
      </MainContainer>
    </>
  );
};
