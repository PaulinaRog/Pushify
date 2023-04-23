import styled, { keyframes } from "styled-components";

export const PlayerContainer = styled.div`
  width: 100vw;
  height: 15vh;
  background-color: black;
  z-index: 3;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ffffff45;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
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

export const BoxCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PlayerBtn = styled.button`
  border-radius: 50%;
  border: none;
  background-color: black;
  font-size: 2em;
  color: #ffffff75;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const PlayerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  align-items: center;
  align-self: flex-start;
  margin-left: -40px;
`;

export const RangeInput = styled.input`
  -webkit-appearance: none;
  margin-right: 15px;
  width: 120px;
  height: 5px;
  background: #ffffff65;
  border-radius: 5px;
  background-image: linear-gradient(
    121deg,
    rgba(255, 0, 235, 1) 0%,
    rgba(255, 0, 205, 1) 100%
  );
  background-repeat: no-repeat;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;
