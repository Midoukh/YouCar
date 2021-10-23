import React from "react";
import styled from "styled-components";

import { NavBar } from "../../Components/NavBar";
import { TopSection } from "./TopSection";
import { BookCard } from "../../Components/BookCard";
import { Marginer } from "../../Components/Marginer";
import { BookingSteps } from "./BookingSteps";
import { AboutUs } from "./AboutUs";
import { useMediaQuery } from "@material-ui/core";
import { TopCars } from "./TopCars";
import { Footer } from "../../Components/Footer";
const StyledHomePage = styled.div`
  max-width: 100vw;
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow-x: hidden;
  /* padding: 0 70px;
  @media (max-width: 500px) {
    padding: 0 30px;
  } */
`;

export const HomePage = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");
  if (isMobile) {
    console.log("We are on mobile");
  }
  return (
    <StyledHomePage>
      <NavBar />
      <TopSection />
      {isMobile && <Marginer marg="50vh" />}
      <BookCard />
      <Marginer marg="20vh" />
      <BookingSteps />
      <Marginer marg="20vh" />
      <AboutUs />
      <Marginer marg="20vh" />
      <TopCars />
      <Footer />
    </StyledHomePage>
  );
};
