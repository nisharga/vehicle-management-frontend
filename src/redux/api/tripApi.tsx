import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";


const tripApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    tripAll: build.query({
      query: (page) => ({
        url: `/trip/list?page=${page}&limit=${5}`,
        method: "GET", 
      }), 
      providesTags: [tagTypes.trip],
    }),
    createTrip: build.mutation({
      query: (createData) => ({
        url: "/trip/create",
        method: "POST",
        data: createData,
      }),
      invalidatesTags: [tagTypes.trip],
    }),
    updateSingleTrip: build.mutation({
      query: ({id, ...data}) => ({
        url: `/vehicle/${id}`,
        method: "PATCH", 
        data: data,
      }),
      invalidatesTags: [tagTypes.vehicle],
    }),
    deleteTrip: build.mutation({
      query: (id) => ({
        url: `/trip/delete/${id}`,
        method: "DELETE",  
      }),
      invalidatesTags: [tagTypes.trip],
    }),
  }),
});

export const {
    useTripAllQuery,
    useDeleteTripMutation
} = tripApi;
