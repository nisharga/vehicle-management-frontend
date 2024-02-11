import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";


const vehicleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    vehicleAll: build.query({
      query: () => ({
        url: "/vehicle",
        method: "GET", 
      }), 
      providesTags: [tagTypes.vehicle],
    }),
    getSingleVehicle: build.query({
      query: (id) => ({
        url: `/vehicle/${id}`,
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
      query: ({id, ...patch }) => ({
        url: "/vehicle/:id",
        method: "PATCH", 
        data: patch,
      }),
      invalidatesTags: [tagTypes.vehicle],
    }),
    deleteVehicle: build.mutation({
      query: (id) => ({
        url: "/vehicle/:id",
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
