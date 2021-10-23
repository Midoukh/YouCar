import React from "react";
import styled from "styled-components";
import { SCREENS } from "../../Components/responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faCalendarAlt,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 1rem 0;
`;
const Title = styled.h2`
  font-size: 1.8em;
  font-weight: 700;
  color: black;
  @media (min-width: ${SCREENS.large}) {
    font-size: 3em;
    font-weight: 900;
  }
`;
const StepsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 2rem;
  @media (min-width: ${SCREENS.large}) {
    margin-top: 4rem;
  }
`;
const StepContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 1.5rem;
  align-items: center;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media (min-width: ${SCREENS.medium}) {
    max-width: 24rem;
  }
  & :hover {
    color: #ff3124;
  }
`;
const Step = styled.div`
  display: flex;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
`;
const StepTitle = styled.h4`
  color: black;
  font-size: large;
  font-weight: bold;
  margin-top: 1rem;
`;
const StepDescription = styled.p`
  font-size: 1.5em;
  width: 83%;
  text-align: center;
  color: #696969;
  @media (min-width: ${SCREENS.medium}) {
    font-size: small;
  }
`;
const StepIcon = styled.span`
  color: #ff3124;
  font-size: xx-large;
`;
export const BookingSteps = () => {
  return (
    <Container>
      <Title>Our Working Steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest Yourcar point and book your car
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDescription>
            Pickup the best date to rent a car for you
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Tour Car</StepTitle>
          <StepDescription>
            Book your nice car with ease in one single click
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
};
