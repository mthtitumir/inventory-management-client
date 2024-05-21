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
      invalidatesTags: ["user"]
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
        method: "PATCH",
        body: updatedUserData,
      }),
      invalidatesTags: ["user"]
    }),

    deleteUser: builder.mutation({
      query: ({id}: {id: string}) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"]
    }),
  }),
});

export const { useCreateUserMutation, useGetAllUserQuery, useUpdateUserMutation, useDeleteUserMutation } = userApi;
