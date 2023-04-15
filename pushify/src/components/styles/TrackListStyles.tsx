import styled from "styled-components";

export const TracksContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.19268217540922616) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  z-index: 3;
  padding-bottom: 16vh;
`;

export const TitleBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const SingleTrackCont = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  width: 98%;
  margin-bottom: 10px;
  align-items: center;

  &:hover {
    background-color: #ffffff15;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;

export const Idx = styled.div`
  width: 30px;
`;

export const TracksHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  width: 100%;
  align-items: center;
  margin: 20px 0;
`;

export const DecorLine = styled.div`
  width: 96%;
  height: 1px;
  background-color: #ffffff35;
  margin-left: 20px;
`;
