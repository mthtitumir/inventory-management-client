import { TBuyer } from "../../../types";
import { baseApi } from "../../api/baseApi";

const buyerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllBuyer: builder.query({
      query: (params) => ({
        url: `/buyers`,
        method: "GET",
        params
      }),
      providesTags: ["buyer"]
    }),

    getSingleBuyer: builder.query({
      query: (buyerId :string | undefined)=> ({
        url: `/buyers/${buyerId}`,
        method: "GET"
      })
    }),

    addBuyer: builder.mutation({
      query: (buyerData) => ({
        url: `/buyers`,
        method: "POST",
        body: buyerData
      }),
      invalidatesTags: ["buyer"]
    }), 

    updateBuyer: builder.mutation({
      query: ({buyerId, buyerUpdatedData}: {buyerId: string , buyerUpdatedData: Partial<TBuyer>}) => ({
        url: `/buyers/${buyerId}`,
        method: "PATCH",
        body: buyerUpdatedData
      }),
      invalidatesTags: ["buyer"]
    }),

  }),
});

export const { useGetAllBuyerQuery, useGetSingleBuyerQuery, useAddBuyerMutation, useUpdateBuyerMutation } = buyerApi;
