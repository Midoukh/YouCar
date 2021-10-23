import React from "react";
import styled from "styled-components";

import carLogo from "../../assets/images/car-logo.png";
import CarLogoDarkImg from "../../assets/images/car-logo-dark.png";

interface ILogoProps {
  color?: "white" | "dark";
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;
const LogoText = styled.div`
  font-weight: bold;
  color: black;
`;

const Image = styled.div`
  width: auto;
  img {
    width: auto;
    height: 100%;
    margin-right: 0.2rem;
  }
`;

export const Logo = (props: ILogoProps) => {
  const { color } = props;
  let colorVal = "inherit";
  if (color === "dark") {
    colorVal = "black";
  } else if (color === "white") {
    colorVal = "white";
  }
  return (
    <LogoContainer>
      <Image>
        <img
          src={color === "white" ? CarLogoDarkImg : carLogo}
          alt="car logo"
        />
      </Image>
      <LogoText style={{ color: colorVal }}>YourCar.</LogoText>
    </LogoContainer>
  );
};
