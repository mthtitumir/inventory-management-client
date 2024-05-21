import { baseApi } from "../../api/baseApi";
import { TUser } from "../auth/authSlice";

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
      providesTags: ["user"]
    }),
    updateUser: builder.mutation({
      query: ({id, updatedUserData}: {id: string, updatedUserData: Partial<TUser>}) => ({
        url: `/users/${id}`,
        method: "GET",
        body: updatedUserData,
      }),
      invalidatesTags: ["user"]
    }),
  }),
});

export const { useCreateUserMutation, useGetAllUserQuery } = userApi;
