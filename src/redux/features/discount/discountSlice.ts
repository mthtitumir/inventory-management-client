import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TDiscount } from "../../../types";

type TDiscountState = {
  discounts: [] | TDiscount[];
};

const initialState: TDiscountState = {
  discounts: [],
};

const discountSlice = createSlice({
  name: "discounts",
  initialState,
  reducers: {
    setDiscount: (state, action) => {
      // console.log(action.payload);
      const discount = action.payload;
      state.discounts = discount;
    },
  },
});

export const { setDiscount } = discountSlice.actions;
export default discountSlice.reducer;
export const useDiscount = (state: RootState) => state.discount;