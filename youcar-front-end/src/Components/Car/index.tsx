import React from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { SCREENS } from "../responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faEllipsisH,
  faFillDrip,
} from "@fortawesome/free-solid-svg-icons";
export interface ICarProps {
  thumbnailSrc: string;
  name: string;
  gear: string;
  dailyPrice: number;
  monthlyPrice: number;
  gas: string;
  mileage: string;
}

const CarContainer = styled.div`
  width: 14em;
  min-height: 22.2em;
  max-height: 30em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  margin: 1rem;
  img {
    margin-top: 0;
  }
  @media (min-width: ${SCREENS.small}) {
    margin: 2rem;
  }
  @media (min-width: ${SCREENS.medium}) {
    margin: 3rem;
    width: 16.5em;
  }
`;

const CarThumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;
const CarName = styled.h3`
  font-size: 1em;
  font-weight: 900;
  margin: 0.4rem 0;
`;

const PricesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0.3rem;
`;

const SmalllText = styled.p`
  color: inherit;
  font-size: x-small;
  font-weight: thin;
  display: inline-flex;
`;

const DailyPrice = styled.h5`
  color: #cc1f08;
  font-weight: 900;
  font-size: small;
  margin-right: 0.4rem;
`;

const MonthlyPrice = styled.h5`
  color: #929292;
  font-weight: 900;
  font-size: small;
`;

const SmallIcon = styled.span`
  color: #6d6d6d;
  font-size: small;
  margin-right: 1rem;
`;

const CarDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const CarDetail = styled.span`
  display: flex;
  align-items: center;
`;

const CarInfo = styled.h6`
  color: #888888;
  font-size: small;
`;

const Separator = styled.div`
  min-width: 100%;
  min-height: 1px;
  display: flex;
  background-color: lightgray;
  margin: 0.1rem 0;
`;

const RentButton = styled(Button)`
  min-width: 100%;
  margin-top: 0.3rem;
  margin-right: 0;
`;

export const Car = (props: ICarProps) => {
  const { name, thumbnailSrc, dailyPrice, monthlyPrice, mileage, gear, gas } =
    props;

  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} alt="thumbnail car" />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PricesContainer>
        <DailyPrice>
          ${dailyPrice} <SmalllText>/Day</SmalllText>
        </DailyPrice>
        <MonthlyPrice>
          ${monthlyPrice} <SmalllText>/Month</SmalllText>
        </MonthlyPrice>
      </PricesContainer>
      <Separator />
      <CarDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{gear}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailsContainer>
      <RentButton text="Rent NOW!" />
    </CarContainer>
  );
};
