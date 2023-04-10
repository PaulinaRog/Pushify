import styled from "styled-components";

export const Nav = styled.nav`
  width: 85%;
  height: 12vh;
  left: 15%;
  position: fixed;
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: space-between;
  top: 0;
  z-index: 3;
  align-items: center;
`;

export const NavButtonsContainer = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
`;

export const NavButtons = styled.button`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: #ffffff15;
  border: none;
  color: rgb(212, 212, 212);
  position: relative;
  transition: all 0.8 ease;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #ffffff35;

    &:after {
      content: attr(data-title);
      background-color: black;
      position: absolute;
      bottom: -35px;
      left: 0;
      padding: 5px;
      color: rgb(212, 212, 212);
    }
  }
`;

export const Profile = styled.button`
  background-color: black;
  border-radius: 30px;
  width: 150px;
  height: 40px;
  border: none;
  margin-right: 20px;
  color: rgb(212, 212, 212);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
`;

export const Pfp = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: -10px;
`;

export const DropdownUL = styled.ul`
  width: 200px;
  background-color: black;
  position: absolute;
  top: 10vh;
  right: 20px;
  list-style: none;
`;

export const DropdownLI = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    width: 100%;
    background-color: #ffffff15;
    color: white;
  }
`;
