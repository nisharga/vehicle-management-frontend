import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const roleManageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allUser: build.query({
        query: (page) => ({
          url: `/auth/allUser?page=${page}&limit=${5}`,
          method: "GET", 
        }), 
        providesTags: [tagTypes.user],
      }),
    manageRole: build.mutation({
      query: (data) => ({
       
        url: "/auth/manageRole",
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useManageRoleMutation,useAllUserQuery } = roleManageApi;
