import React from "react";

import styled from "styled-components";

import { Logo } from "../Logo";
import { NavItems } from "./NavItems";

const NavBarContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px;
  @media (max-width: 500px) {
    padding: 0 30px;
  }
`;

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo />
      <NavItems />
    </NavBarContainer>
  );
};
