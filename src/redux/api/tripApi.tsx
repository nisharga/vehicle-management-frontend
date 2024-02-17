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
    tripDetailsAll: build.query({
      query: () => ({
        url: `/trip/list`,
        method: "GET", 
      }), 
      providesTags: [tagTypes.trip],
    }),
    tripSingle: build.query({
      query: (id) => ({
        url: `/trip/single/${id}`,
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
        url: `/trip/update/${id}`,
        method: "PATCH", 
        data: data,
      }),
      invalidatesTags: [tagTypes.trip],
    }),
    deleteTrip: build.mutation({
      query: (id) => ({
        url: `/trip/delete/${id}`,
        method: "DELETE",  
      }),
      invalidatesTags: [tagTypes.trip],
    }),
    upcomingTrip:build.query({
      query:(page)=>({
        url:`/trip/upcomingTrip`,
        method:"GET"
      }),
      providesTags:[tagTypes.trip],
    })
  }),
});

export const {
    useTripAllQuery,
    useTripDetailsAllQuery,
    useTripSingleQuery,
    useCreateTripMutation,
    useUpdateSingleTripMutation,
    useDeleteTripMutation,
    useUpcomingTripQuery,
} = tripApi;
