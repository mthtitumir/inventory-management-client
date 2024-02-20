import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TCompany } from "../../../types";

type TCompanyState = {
  company: null | TCompany;
};
const initialState: TCompanyState = {
  company: null,
};
const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      const { company } = action.payload;
      state.company = company;
    },
    companyLogout: (state) => {
      state.company = null;
    },
  },
});

export const { setCompany, companyLogout } = companySlice.actions;
export default companySlice.reducer;
export const useCurrentCompany = (state: RootState) => state.company.company;
