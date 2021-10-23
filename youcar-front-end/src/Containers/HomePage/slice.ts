import { Action, createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./homePageType";

const initialState: IHomePageState = {
  topCars: [],
};

const homePageSlice = createSlice({
  name: "HomePage",
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topCars = action.payload;
    },
  },
});

export const { setTopCars } = homePageSlice.actions;
export default homePageSlice.reducer;
