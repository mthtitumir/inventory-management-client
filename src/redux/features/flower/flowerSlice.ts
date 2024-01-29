import { createSlice } from "@reduxjs/toolkit";
import { TFlower } from "../../../types";
import { RootState } from "../../store";

type TFlowerState = {
  flowers: null | TFlower[];
};

const initialState: TFlowerState = {
  flowers: [],
};

const flowerSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {
    setFlowers: (state, action) => {
      // console.log(action.payload);
      const flowers = action.payload;
      state.flowers = flowers;
    },
  },
});

export const { setFlowers } = flowerSlice.actions;
export default flowerSlice.reducer;
export const useFlowers = (state: RootState) => state;
