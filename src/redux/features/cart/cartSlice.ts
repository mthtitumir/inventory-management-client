import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TCart } from "../../../types";

type TSalesState = {
  cart: [] | TCart[];
};

const initialState: TSalesState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      // console.log(action.payload);
      const cart = action.payload;
      state.cart = cart;
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
export const useCart = (state: RootState) => state.cart.cart;