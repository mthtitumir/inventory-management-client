import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userInfo) => ({
        url: "/users",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllUser: builder.query({
      query: (params) => ({
        url: "/users",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useGetAllUserQuery } = userApi;
