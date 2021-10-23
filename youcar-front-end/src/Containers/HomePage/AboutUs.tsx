import React from "react";
import styled from "styled-components";
import { SCREENS } from "../../Components/responsive";
import jeepImg from "../../assets/images/jeep.png";
const AboutUsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  @media (min-width: ${SCREENS.twoXLarge}) {
    justify-content: center;
  }
  @media (min-width: ${SCREENS.medium}) {
    padding: 1rem 0;
    flex-flow: row;
    padding: 1rem 2rem;
  }
`;
const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -60px;

  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.medium}) {
    height: 28em;
    margin-left: -100px;
  }
  @media (min-width: ${SCREENS.large}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS.twoXLarge}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 1rem;
  @media (min-width: ${SCREENS.medium}) {
    margin-left: 4rem;
    width: 50%;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: xx-large;
  font-weight: 900;
  @media (min-width: ${SCREENS.medium}) {
    font-size: 2.8em;
    font-weight: 900;

    line-height: 1.2em;
  }
`;

const InfoText = styled.p`
  color: gray;
  font-size: small;
  margin-top: 1rem;
  @media (min-width: ${SCREENS.medium}) {
    font-size: 1.2em;
  }
`;

export const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={jeepImg} alt="jeep car" />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum
          dolore delectus autem praesentium, eligendi, nostrum, laborum ex unde
          necessitatibus facilis? Rerum officiis nobis corporis itaque
          voluptates, nam a quasi? dolore delectus autem praesentium, eligendi,
          nostrum, laborum ex unde necessitatibus facilis? Rerum officiis nobis
          corporis itaque voluptates, nam a quasi?
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};
