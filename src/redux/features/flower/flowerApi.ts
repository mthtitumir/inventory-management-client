import { baseApi } from "../../api/baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFlowers: builder.query({
      query: () => ({
        url: "/flowers",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllFlowersQuery } = taskApi;
