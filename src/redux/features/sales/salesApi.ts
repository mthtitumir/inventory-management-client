import { baseApi } from "../../api/baseApi";

const salesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSales: builder.query({
      query: (params) => ({
        url: "/sales",
        method: "GET",
        params,
      }),
    }),
    addSales: builder.mutation({
      query: (salesData) => ({
        url: `/sales`,
        method: "POST",
        body: salesData
      })
    }), 
  }),
});

export const { useAddSalesMutation, useGetAllSalesQuery } = salesApi;
