import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Logo } from "../Logo";
import { SCREENS } from "../responsive";

const FooterContainer = styled.footer`
  min-width: 100%;
  /* min-height: 20em; */
  background-color: #1d2124;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: ${SCREENS.small}) {
    flex-flow: column;
    padding-left: 40px;
  }
`;

const AboutContainer = styled.div`
  width: 25%;
  display: flex;
  flex-flow: column;
  margin-right: 1rem;
  @media (max-width: ${SCREENS.small}) {
    width: 80%;
  }
`;

const AboutText = styled.p`
  color: white;
  font-size: medium;
  line-height: 1.4em;
  margin-top: 0.4rem;
  font-weight: 500;
  opacity: 0.7;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 3.5rem;
  @media (max-width: ${SCREENS.small}) {
    margin-left: 0;
  }
`;

const LinksList = styled.ul`
  outline: none;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
`;

const ListItem = styled.li`
  margin-bottom: 0.4rem;
  opacity: 0.75;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  & > a {
    font-size: small;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
  & :hover {
    opacity: 1;
  }
`;

const HeaderTitle = styled.h3`
  font-weight: bold;
  font-size: x-large;
  color: white;
  margin-bottom: 0.4rem;
`;

const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RedIcon = styled.span`
  width: 35px;
  height: 35px;
  background-color: #ff3124;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: small;
  margin-right: 0.4rem;
`;

const SmalllText = styled.h6`
  color: white;
  font-size: small;
  font-weight: 200;
`;

const BottomContainer = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: flex-start;
  margin-top: 0.5rem;
`;

const CopyRightText = styled.small`
  font-size: 12px;
  color: lightgray;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <AboutContainer>
        <Logo color="white" />
        <AboutText>
          YouCar is a Car renting and selling company located in many countries
          across the world which has high quality cars and services.
        </AboutText>
      </AboutContainer>
      <SectionContainer>
        <HeaderTitle>Our Links</HeaderTitle>
        <LinksList>
          <ListItem>
            <a href="#">Home</a>
          </ListItem>
          <ListItem>
            <a href="#">About US</a>
          </ListItem>
          <ListItem>
            <a href="#">Services</a>
          </ListItem>
          <ListItem>
            <a href="#">Models</a>
          </ListItem>
          <ListItem>
            <a href="#">Blog</a>
          </ListItem>
        </LinksList>
      </SectionContainer>
      <SectionContainer>
        <HeaderTitle>Other Links</HeaderTitle>
        <LinksList>
          <ListItem>
            <a href="#">FAQ</a>
          </ListItem>
          <ListItem>
            <a href="#">Contact US</a>
          </ListItem>
          <ListItem>
            <a href="#">Support</a>
          </ListItem>
          <ListItem>
            <a href="#">Privacy Policy</a>
          </ListItem>
          <ListItem>
            <a href="#">Terms & Conditions</a>
          </ListItem>
        </LinksList>
      </SectionContainer>
      <SectionContainer>
        <HeaderTitle>Call Now</HeaderTitle>
        <HorizontalContainer>
          <RedIcon>
            <FontAwesomeIcon icon={faPhoneAlt} />
          </RedIcon>
          <SmalllText>+91 555-234-8647</SmalllText>
        </HorizontalContainer>
      </SectionContainer>
      <SectionContainer>
        <HeaderTitle>Mail</HeaderTitle>
        <HorizontalContainer>
          <RedIcon>
            <FontAwesomeIcon icon={faEnvelope} />
          </RedIcon>
          <SmalllText>info@yourcar.com</SmalllText>
        </HorizontalContainer>
      </SectionContainer>
      <BottomContainer>
        <CopyRightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved.
        </CopyRightText>
      </BottomContainer>
    </FooterContainer>
  );
};
