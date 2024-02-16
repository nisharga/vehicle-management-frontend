import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const tripCostUrl = "/trip-cost";

const tripCostApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTripCost: build.mutation({
      query: (data: any) => ({
        url: `${tripCostUrl}/create`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.tripCost],
    }),
    getAllTripCost: build.query({
      query: (page) => ({
        url: `${tripCostUrl}/list?page=${page}&limit=${5}`,
        method: "GET",
      }),
      providesTags: [tagTypes.tripCost],
    }),
    getSingleTripCost: build.query({
      query: (id: any) => ({
        url: `${tripCostUrl}/single/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.tripCost],
    }),
    updateTripCost: build.mutation({
      query: (data) => ({
        url: `${tripCostUrl}/update/${data?.id}`,
        method: "PATCH",
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.tripCost],
    }),
    deleteTripCost: build.mutation({
      query: (id: any) => ({
        url: `${tripCostUrl}/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.tripCost],
    }),
  }),
});

export const {
  useCreateTripCostMutation,
  useGetAllTripCostQuery,
  useGetSingleTripCostQuery,
  useUpdateTripCostMutation,
  useDeleteTripCostMutation,
} = tripCostApi;
