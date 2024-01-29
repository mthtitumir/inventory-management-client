import { TFlower } from "../../../types";
import { baseApi } from "../../api/baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFlowers: builder.query({
      query: () => ({
        url: "/flowers",
        method: "GET",
      }),
    }),
    getSingleFlower: builder.query({
      query: (flowerId :string | undefined)=> ({
        url: `/flowers/${flowerId}`,
        method: "GET"
      })
    }),
    addFlower: builder.mutation({
      query: (flowerData) => ({
        url: `/flowers`,
        method: "POST",
        body: flowerData
      })
    }), 
    updateFlower: builder.mutation({
      query: ({flowerId, flowerUpdatedData}: {flowerId: string, flowerUpdatedData: Partial<TFlower>}) => ({
        url: `/flowers/${flowerId}`,
        method: "PATCH",
        body: flowerUpdatedData
      })
    }), 
    deleteFlower: builder.mutation({
      query: (flowerId: string) => ({
        url: `/flowers/${flowerId}`,
        method: "DELETE",
      })
    }), 
  }),
});

export const { useGetAllFlowersQuery, useGetSingleFlowerQuery, useAddFlowerMutation, useUpdateFlowerMutation, useDeleteFlowerMutation } = taskApi;
