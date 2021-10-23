import React, { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import styled from "styled-components";
import { Button } from "../Button";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  min-height: 4.3em;
  width: 40%;

  @media (max-width: 700px) {
    margin-bottom: 2rem;
    min-height: 6.3em;
    width: 95%;
    max-width: 100%;
    padding: 1rem;
    position: relative;
    align-items: flex-start;
    && #book {
      position: absolute;
      bottom: 0.1rem;
      width: 87%;
    }
  }
`;

const ItemContainer = styled.div`
  display: flex;
  position: relative;
`;

const Icon = styled.span`
  color: #ff3124;
  cursor: pointer;
  user-select: none;
`;
const SmallIcon = styled.span`
  color: grey;
  margin-left: 0.25rem;
  user-select: none;
`;
const Name = styled.span`
  color: gray;
  margin-left: 0.5rem;
  user-select: none;
  @media (max-width: 700px) {
    font-size: 0.8em;
  }
`;
const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  background-color: #ccc;
  @media (max-width: 700px) {
    height: 25%;
  }
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  top: 2em;
  left: -1em;
  max-width: 81vw;
  user-select: none;
  z-index: 100000;
  @media (min-width: ${SCREENS.medium}) {
    top: 4em;
    left: -2em;
    max-width: none;
  }
`;
const DateCalendarReturn = styled(Calendar)`
  position: absolute;
  top: 2em;
  left: -8.7em;
  max-width: 81vw;
  user-select: none;
  z-index: 100000;
  @media (min-width: ${SCREENS.medium}) {
    top: 4em;
    left: -2em;
    max-width: none;
  }
`;
export const BookCard = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);

  const handleOpenStartCalendar = () => {
    setIsStartCalendarOpen(!isStartCalendarOpen);
    setIsReturnCalendarOpen(false);
  };
  const handleOpenReturnCalendar = () => {
    setIsReturnCalendarOpen(!isReturnCalendarOpen);
    setIsStartCalendarOpen(false);
  };

  return (
    <main style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <CardContainer
        style={{
          position:
            isReturnCalendarOpen || isStartCalendarOpen ? "unset" : "relative",
        }}
      >
        <ItemContainer>
          <Icon onClick={handleOpenStartCalendar}>
            {<FontAwesomeIcon icon={faCalendarAlt} />}
          </Icon>
          <Name>Pick Up Date</Name>
          <SmallIcon>
            <FontAwesomeIcon
              icon={!isStartCalendarOpen ? faCaretDown : faCaretUp}
            />
          </SmallIcon>
          {isStartCalendarOpen && (
            <DateCalendar value={startDate} onChange={setStartDate} />
          )}
        </ItemContainer>
        <LineSeperator />
        <ItemContainer>
          <Icon onClick={handleOpenReturnCalendar}>
            {<FontAwesomeIcon icon={faCalendarAlt} />}
          </Icon>
          <Name>Return Date</Name>
          <SmallIcon>
            <FontAwesomeIcon
              icon={!isReturnCalendarOpen ? faCaretDown : faCaretUp}
            />
          </SmallIcon>
          {isReturnCalendarOpen && (
            <DateCalendarReturn value={returnDate} onChange={setReturnDate} />
          )}
        </ItemContainer>
        <Button text="Book your ride" theme="outlined" />
      </CardContainer>
    </main>
  );
};
