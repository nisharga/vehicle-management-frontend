import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const officeCostUrl = "/officeCost";

const officeCostApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOfficeCost: build.mutation({
      query: (data: any) => ({
        url: `${officeCostUrl}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.officeCost],
    }),
    getAllOfficeCost: build.query({
      query: (page) => ({
        url: `${officeCostUrl}?page=${page}&limit=${5}`,
        method: "GET",
      }),
      providesTags: [tagTypes.officeCost],
    }),
    getSingleOfficeCost: build.query({
      query: (id: any) => ({
        url: `${officeCostUrl}/single/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.officeCost],
    }),
    updateOfficeCost: build.mutation({
      query: ({ id, ...data }) => ({
        url: `${officeCostUrl}/update/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.officeCost],
    }),
    deleteOfficeCost: build.mutation({
      query: (id: any) => ({
        url: `${officeCostUrl}/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.officeCost],
    }),
  }),
});

export const {
  useCreateOfficeCostMutation,
  useGetAllOfficeCostQuery,
  useGetSingleOfficeCostQuery,
  useUpdateOfficeCostMutation,
  useDeleteOfficeCostMutation,
} = officeCostApi;
