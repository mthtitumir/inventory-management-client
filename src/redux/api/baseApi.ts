import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:4444/api/v1",
    // baseUrl: "https://flower-management-server-two.vercel.app/api/v1",
    credentials: "include",
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("Authorization", `${token}`);
        }
        return headers;
    }
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery,
    tagTypes: ["flower", "sales", "auth", "discount", "company", "tradingPartner", "cart"],
    endpoints: () => ({})
})