import styled from "styled-components";

export const PositionedCentr = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
`;

export const Input = styled.input`
  padding: 10px;
  background: #ffffff15;
  width: 300px;
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  transition: all 1s ease;

  &:focus {
    outline: none;
    background: #ffffff45;
    border-radius: 20px;
  }

  ::placeholder {
    color: #ffffff85;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #ffffff85;
  }

  ::-ms-input-placeholder {
    color: #ffffff85;
  }
`;

export const GenresContainer = styled.div`
  width: 100%;
  height: 30vh;
  margin-top: 5vh;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  gap: 20px;
  margin-left: 20px;
`;

export const GenrePic = styled.img`
  width: 30vh;
  height: 30vh;
  object-fit: cover;
  filter: opacity(0.3);
`;

export const GenCont = styled.div`
  position: relative;
`;

export const GenName = styled.h2`
  position: absolute;
  top: 20px;
  left: 10px;
  z-index: 3;
  opacity: 0.5;
`;
