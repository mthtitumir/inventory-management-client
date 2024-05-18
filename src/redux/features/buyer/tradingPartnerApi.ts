import { TTradingPartner } from "../../../types";
import { baseApi } from "../../api/baseApi";

const tradingPartnerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllTradingPartner: builder.query({
      query: (params) => ({
        url: `trading-partners`,
        method: "GET",
        params
      }),
      providesTags: ["tradingPartner"]
    }),

    getSingleTradingPartner: builder.query({
      query: (tradingPartnerId : string | undefined)=> ({
        url: `trading-partners/${tradingPartnerId}`,
        method: "GET"
      })
    }),

    addTradingPartner: builder.mutation({
      query: (tradingPartnerData) => ({
        url: `trading-partners`,
        method: "POST",
        body: tradingPartnerData
      }),
      invalidatesTags: ["tradingPartner"]
    }), 

    updateTradingPartner: builder.mutation({
      query: ({tradingPartnerId, tradingPartnerUpdatedData}: {tradingPartnerId: string , tradingPartnerUpdatedData: Partial<TTradingPartner>}) => ({
        url: `trading-partners/${tradingPartnerId}`,
        method: "PATCH",
        body: tradingPartnerUpdatedData
      }),
      invalidatesTags: ["tradingPartner"]
    }),

  }),
});

export const { useGetAllTradingPartnerQuery, useGetSingleTradingPartnerQuery, useAddTradingPartnerMutation, useUpdateTradingPartnerMutation } = tradingPartnerApi;
