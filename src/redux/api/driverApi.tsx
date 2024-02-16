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
        url: `/driver/single/${id}`,
        method: "GET", 
      }), 
      providesTags: [tagTypes.driver],
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
        url: `/driver/update/${id}`,
        method: "PATCH", 
        data: data,
      }),
      invalidatesTags: [tagTypes.driver],
    }),
    deleteDriver: build.mutation({
      query: (id) => ({
        url: `/driver/delete/${id}`,
        method: "DELETE",  
      }),
      invalidatesTags: [tagTypes.driver],
    }),
    driverVehicle: build.query({
      query: (page) => ({
        url: `/vehicle-driver/vehicleDriverlist`,
        method: "GET", 
      }), 
      providesTags: [tagTypes.driver],
    }),
  }),
});

export const {
    useGetAllDriverQuery,
    useGetSingleDriverQuery,
    useCreateDriverMutation,
    useUpdateDriverMutation,
    useDeleteDriverMutation,
    useDriverVehicleQuery
} = driverApi;
