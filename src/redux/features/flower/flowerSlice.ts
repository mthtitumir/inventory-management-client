import { createSlice } from "@reduxjs/toolkit";
import { TFlower } from "../../../types";
import { RootState } from "../../store";

type TFlowerState = {
  flowers: null | TFlower[];
  bulkDeleteIds: [] | string[];
};

const initialState: TFlowerState = {
  flowers: [],
  bulkDeleteIds: [],
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
    setBulkDeleteIds: (state, action) => {
      const idArray = action.payload;
      state.bulkDeleteIds = idArray;
    }
  },
});

export const { setFlowers, setBulkDeleteIds } = flowerSlice.actions;
export default flowerSlice.reducer;
export const useFlowers = (state: RootState) => state;
export const useBulkDeleteIds = (state: RootState) => state.flower.bulkDeleteIds;
