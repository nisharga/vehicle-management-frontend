import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";


const driverApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDriver: build.query({
      query: (page) => ({
        url: `/driver?page=${page}&limit=${5}`,
        method: "GET", 
      }), 
      providesTags: [tagTypes.driver],
    }),
    getSingleDriver: build.query({
      query: (id) => ({
        url: `/trip/single/${id}`,
        method: "GET", 
      }), 
      providesTags: [tagTypes.trip],
    }),
    createDriver: build.mutation({
      query: (createData) => ({
        url: "/driver",
        method: "POST",
        data: createData,
      }),
      invalidatesTags: [tagTypes.driver],
    }),
    updateDriver: build.mutation({
      query: ({id, ...data}) => ({
        url: `/trip/update/${id}`,
        method: "PATCH", 
        data: data,
      }),
      invalidatesTags: [tagTypes.vehicle],
    }),
    deleteDriver: build.mutation({
      query: (id) => ({
        url: `/trip/delete/${id}`,
        method: "DELETE",  
      }),
      invalidatesTags: [tagTypes.driver],
    }),
  }),
});

export const {
    useGetAllDriverQuery,
    useGetSingleDriverQuery,
    useCreateDriverMutation,
    useUpdateDriverMutation,
    useDeleteDriverMutation,
} = driverApi;
