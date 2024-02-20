import { TCompany } from "../../../types";
import { baseApi } from "../../api/baseApi";

const companyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyCompany: builder.query({
      query: (discountCode :string | undefined)=> ({
        url: `/companies/${discountCode}`,
        method: "GET"
      })
    }),

    updateCompany: builder.mutation({
      query: ({companyId, companyUpdatedData}: {companyId: string , companyUpdatedData: Partial<TCompany>}) => ({
        url: `/companies/${companyId}`,
        method: "PATCH",
        body: companyUpdatedData
      }),
      invalidatesTags: ["company"]
    }),
  }),
});

export const { useGetMyCompanyQuery, useUpdateCompanyMutation } = companyApi;
