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
  // const { topCars } = useSelector(stateSelector);
  const topCars = [
    {
      id: "537b2b31-a54d-46da-9207-882821995d5f",
      name: "Picanto",
      thumbnailUrl:
        "https://firebasestorage.googleapis.com/v0/b/picste-69286.appspot.com/o/yourcar%2Fpicanto-removebg-preview.png?alt=media&token=55021531-8be6-4260-8aef-bff4e22e1852",
      gear: "AutoMatic",
      dailyPrice: 100,
      monthlyPrice: 1800,
      mileage: "5k",
      gas: "AutoMatic",
    },
    {
      id: "706763f4-4349-4d92-8a47-87ea1d9f24ac",
      name: "308 GET Line",
      thumbnailUrl:
        "https://firebasestorage.googleapis.com/v0/b/picste-69286.appspot.com/o/yourcar%2F308-removebg-preview.png?alt=media&token=854c047c-15b2-462d-86b0-952b33fd8b1e",
      gear: "Manual",
      dailyPrice: 180,
      monthlyPrice: 2700,
      mileage: "10k",
      gas: "AutoMatic",
    },
    {
      id: "8787168c-c3f8-40db-9138-e074e97e933f",
      name: "Audi TT RS",
      thumbnailUrl:
        "https://firebasestorage.googleapis.com/v0/b/picste-69286.appspot.com/o/yourcar%2Ftt-removebg-preview.png?alt=media&token=64923b67-c286-4121-b7db-bdf52b0a90a4",
      gear: "AutoMatic",
      dailyPrice: 380,
      monthlyPrice: 3500,
      mileage: "20k",
      gas: "AutoMatic",
    },
    {
      id: "da07b4b8-43f3-4c34-9edd-005d744e5556",
      name: "Clio 4 GET Line",
      thumbnailUrl:
        "https://firebasestorage.googleapis.com/v0/b/picste-69286.appspot.com/o/yourcar%2Fclio_4-removebg-preview.png?alt=media&token=bebd4708-2503-4d01-aee1-09c4639ba3a5",
      gear: "Manual",
      dailyPrice: 100,
      monthlyPrice: 2200,
      mileage: "50k",
      gas: "AutoMatic",
    },
    {
      id: "f7175a10-6e16-4644-9708-db35252b191c",
      name: "Audi S3 Car",
      thumbnailUrl:
        "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
      gear: "Auto",
      dailyPrice: 70,
      monthlyPrice: 1600,
      mileage: "10k",
      gas: "AutoMatic",
    },
  ];

  console.log(topCars);
  // const fetchTopCars = async () => {
  //   setLoading(true);
  //   const cars = await CarsService.getCars().catch((err) => {
  //     console.log(err);
  //   });
  //   console.log("Cars", cars);
  //   if (cars) setTopCars(cars);
  //   setLoading(false);
  // };

  useEffect(() => {
    // fetchTopCars();
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
