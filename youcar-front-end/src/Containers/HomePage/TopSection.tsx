import React from "react";
import styled from "styled-components";
import MclareneCarImg from "../../assets/images/mclaren-orange-big.png";
import blobImg from "../../assets/images/blob.svg";
import { Button } from "../../Components/Button";
import { SCREENS } from "../../Components/responsive";

const TopSectionContainer = styled.div`
  width: 100%;
  min-height: 400px;
  margin-top: 6em;
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
  @media (max-width: 500px) {
    padding: 0 30px;
  }
`;

const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column;
`;

const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column;
  position: relative;
  margin-top: 20px;
`;

const Slogan = styled.h1`
  font-weight: 900;
  font-size: 3em;
  margin-bottom: 1rem;
  @media (max-width: 500px) {
    font-size: 2em;
    margin-bottom: 0.5rem;
  }
`;

const Description = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  font-weight: 700;
  max-height: 100px;
  max-width: 40vw;

  color: #5c5c5cf0;
  @media (max-width: 500px) {
    max-height: 200px;
    min-width: 85vw;
  }
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    /* height: auto; */
    max-height: max-content;
  }
  @media (max-width: 500px) {
    width: 25em;
    max-height: 10em;
    right: -9em;
    top: -10em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.small}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.large}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xLarge}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandAloneCar = styled.div`
  width: auto;

  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (max-width: 500px) {
    height: 10em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.small}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.large}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xLarge}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;
const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    margin-top: 3rem;
  }
  @media (max-width: 550px) {
    margin-top: 5rem;
  }
  @media (max-width: 300px) {
    margin-top: 8rem;
  }
`;
export const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent the Best Quality Cars with Us.</Slogan>
        <Description>
          Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like.
        </Description>
        <ButtonsContainer>
          <Button theme="outlined" text="Book Your Ride" />
          <Button theme="filled" text="Sell Your Car" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={blobImg} alt="blob" />
        </BlobContainer>
        <StandAloneCar>
          <img src={MclareneCarImg} alt="car" />
        </StandAloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
};
