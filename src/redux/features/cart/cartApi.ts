import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCart: builder.query({
      query: (params) => ({
        url: "/carts",
        method: "GET",
        params,
      }),
      providesTags: ["cart"]
    }),
    getSingleCart: builder.query({
      query: (params) => ({
        url: "/carts",
        method: "GET",
        params,
      }),
      providesTags: ["cart"]
    }),
    addOrUpdateCart: builder.mutation({
      query: (cartData) => ({
        url: `/carts`,
        method: "POST",
        body: cartData
      }),
      invalidatesTags: ["cart"]
    }), 
  }),
});

export const { useAddOrUpdateCartMutation, useGetAllCartQuery, useGetSingleCartQuery } = cartApi;
