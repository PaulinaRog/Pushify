import styled from "styled-components";

export const Logo = styled.h1`
  font-family: "Orbitron", sans-serif;
  color: white;
  padding-left: 20px;
  padding-top: 20px;
  cursor: pointer;
`;

export const Aside = styled.aside`
  background-color: black;
  color: gray;
  width: 15%;
  height: 100vh;
  position: fixed;
`;

export const List = styled.ul`
  text-decoration: none;
  padding-left: 20px;
  padding-top: 40px;
  font-size: 1.1em;
  list-style: none;
  line-height: 2em;
`;

export const Li = styled.li`
  &:hover {
    color: white;
    transition: all 1s ease;
    cursor: pointer;
  }
`;
