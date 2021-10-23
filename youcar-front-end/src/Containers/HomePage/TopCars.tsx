import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import styled from "styled-components";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { SCREENS } from "../../Components/responsive";
import { Car, ICarProps } from "../../Components/Car";
import CarsService from "../../services/carsService/index";
import { setTopCars } from "./slice";
import { GetCars_cars } from "../../services/carsService/__generated__/GetCars";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectTopCars } from "./selectors";
import MoonLoader from "react-spinners/MoonLoader";

const TopCarsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  margin-bottom: 2rem;
  @media (min-width: ${SCREENS.medium}) {
    padding: 0;
  }
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

const CarsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  @media (min-width: ${SCREENS.large}) {
    margin-top: 1rem;
  }
  @media (max-width: ${SCREENS.small}) {
    width: 130%;
  }
`;
const EmptyCars = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  color: black;
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});
const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

export const TopCars = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${SCREENS.small})`);

  const { setTopCars } = actionDispatch(useDispatch());
  const { topCars } = useSelector(stateSelector);

  console.log(topCars);
  const fetchTopCars = async () => {
    setLoading(true);
    const cars = await CarsService.getCars().catch((err) => {
      console.log(err);
    });
    console.log("Cars", cars);
    if (cars) setTopCars(cars);
    setLoading(false);
  };

  useEffect(() => {
    fetchTopCars();
  }, []);
  const isEmptyTopCars = !topCars || topCars.length === 0;
  const cars =
    (!isEmptyTopCars &&
      topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailUrl} />)) ||
    [];
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={20} />
        </LoadingContainer>
      )}
      {isEmptyTopCars && !isLoading && <EmptyCars>No Cars To Show!</EmptyCars>}

      {!isEmptyTopCars && !isLoading && (
        <CarsContainer>
          <Carousel
            value={currentSlide}
            onChange={setCurrentSlide}
            slides={cars}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  "clickToChange",
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  "clickToChange",
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots
            value={currentSlide}
            onChange={setCurrentSlide}
            number={isMobile ? cars.length : Math.ceil(cars.length / 3)}
          />
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
};
