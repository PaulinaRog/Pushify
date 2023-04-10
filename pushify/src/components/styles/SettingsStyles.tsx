import styled from "styled-components";

export const LanguageH3 = styled.h3`
  margin-top: 2vh;
  margin-left: 20vw;
`;

export const LanguageH5 = styled.h5`
  margin-top: 2vh;
  margin-left: 20vw;
`;

export const PickLanguage = styled.select`
  padding: 10px;
  background: #ffffff15;
  width: 300px;
  border: none;
  border-radius: 5px;
  margin-top: 5px;

  &:focus-visible {
    outline: none;
  }
`;

export const Option = styled.option`
  background-color: black;
  font-size: 1.1em;
`;

export const SelectLangContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
