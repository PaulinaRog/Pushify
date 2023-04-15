import styled, { keyframes } from "styled-components";

export const PlayerContainer = styled.div`
  width: 100vw;
  height: 15vh;
  background-color: black;
  z-index: 3;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ffffff45;
`;

const bars = keyframes`
    10%{
        height: 1px;
    }
    50%{
        height: 15px;
    }
    100%{
        height: 25px;
    }
`;

export const Bar1 = styled.div`
  height: 1px;
  width: 3px;
  background-color: fuchsia;
  animation: ${bars} 1.5s alternate linear infinite;
`;

export const Bar2 = styled.div`
  height: 1px;
  width: 3px;
  background-color: fuchsia;
  animation: ${bars} 1s alternate linear infinite;
`;

export const Bar3 = styled.div`
  height: 1px;
  width: 3px;
  background-color: fuchsia;
  animation: ${bars} 2s alternate linear infinite;
`;

export const BarsContainer = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
  gap: 5px;
  align-items: flex-end;
`;
