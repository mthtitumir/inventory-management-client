import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TSales } from "../../../types";

type TSalesState = {
  sales: null | TSales[];
};

const initialState: TSalesState = {
  sales: [],
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setSales: (state, action) => {
      // console.log(action.payload);
      const sales = action.payload;
      state.sales = sales;
    },
  },
});

export const { setSales } = salesSlice.actions;
export default salesSlice.reducer;
export const useSales = (state: RootState) => state.sales.sales;