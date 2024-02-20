import { TDiscount } from "../../../types";
import { baseApi } from "../../api/baseApi";

const discountApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllDiscounts: builder.query({
      query: (companyId) => ({
        url: `/discounts/${companyId}`,
        method: "GET",
      }),
      providesTags: ["discount"]
    }),

    getSingleDiscount: builder.query({
      query: (discountCode :string | undefined)=> ({
        url: `/discounts/${discountCode}`,
        method: "GET"
      })
    }),

    addDiscount: builder.mutation({
      query: (discountData) => ({
        url: `/discounts`,
        method: "POST",
        body: discountData
      }),
      invalidatesTags: ["discount"]
    }), 

    updateDiscount: builder.mutation({
      query: ({discountId, discountUpdatedData}: {discountId: string , discountUpdatedData: Partial<TDiscount>}) => ({
        url: `/discounts/${discountId}`,
        method: "PATCH",
        body: discountUpdatedData
      }),
      invalidatesTags: ["discount"]
    }),

  }),
});

export const { useGetAllDiscountsQuery, useGetSingleDiscountQuery, useAddDiscountMutation, useUpdateDiscountMutation } = discountApi;
