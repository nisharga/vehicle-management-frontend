import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";


const vehicleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    vehicleAll: build.query({
      query: (page) => ({
        url: `/vehicle?page=${page}&limit=${5}`,
        method: "GET", 
      }), 
      providesTags: [tagTypes.vehicle],
    }),
    getSingleVehicle: build.query({
      query: (id) => ({
        url: `/vehicle/single/${id}`,
        method: "GET", 
      }),
      providesTags: [tagTypes.vehicle],
    }),
    createVehicle: build.mutation({
      query: (createData) => ({
        url: "/vehicle",
        method: "POST",
        data: createData,
      }),
      invalidatesTags: [tagTypes.vehicle],
    }),
    updateSingleVehicle: build.mutation({
      query: ({id, ...data}) => ({
        url: `/vehicle/update/${id}`,
        method: "PATCH", 
        data: data,
      }),
      invalidatesTags: [tagTypes.vehicle],
    }),
    deleteVehicle: build.mutation({
      query: (id) => ({
        url: `/vehicle/delete/${id}`,
        method: "DELETE",  
      }),
      invalidatesTags: [tagTypes.vehicle],
    }),
  }),
});

export const { 
  useVehicleAllQuery, 
  useGetSingleVehicleQuery,
  useCreateVehicleMutation, 
  useUpdateSingleVehicleMutation, 
  useDeleteVehicleMutation 
} = vehicleApi;
