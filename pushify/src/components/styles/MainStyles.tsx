import styled from "styled-components";

export const MainContainer = styled.main`
  background: linear-gradient(
    180deg,
    rgba(133, 0, 89, 1) 0%,
    rgba(64, 0, 90, 1) 100%
  );
  width: 85vw;
  height: 100vh;
  position: fixed;
  left: 15%;
`;

export const H1 = styled.h1`
  color: white;
  filter: opacity(0.5) contrast(0.8);
  padding: 20px;
  margin-top: 15vh;
`;

export const LibrariesList = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

export const AlbumDiv = styled.div`
  width: 32%;
  backdrop-filter: blur(5px);
  background-color: #ffffff15;
  padding-left: 5px;
  padding-top: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff35;
    transition: all 0.8s ease;
  }
`;

export const Albums = styled.img`
  width: 25%;
  border-radius: 5px;
`;
