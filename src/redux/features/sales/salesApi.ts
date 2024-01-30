import { baseApi } from "../../api/baseApi";

const salesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSales: builder.query({
      query: (params) => ({
        url: "/sales",
        method: "GET",
        params,
      }),
      providesTags: ["sales"]
    }),
    addSales: builder.mutation({
      query: (salesData) => ({
        url: `/sales`,
        method: "POST",
        body: salesData
      }),
      invalidatesTags: ["sales"]
    }), 
  }),
});

export const { useAddSalesMutation, useGetAllSalesQuery } = salesApi;
