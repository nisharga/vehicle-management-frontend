import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";


const accessoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAccessoryAll: build.query({
            query: (page) => ({
              url: `/accessory?page=${page}&limit=${5}`,
              method: "GET", 
            }), 
            providesTags: [tagTypes.accessory],
          }),
          getSingleAccessory: build.query({
            query: (id) => ({
              url: `/accessory/${id}`,
              method: "GET", 
            }),
            providesTags: [tagTypes.vehicle],
          }),
          createAccessory: build.mutation({
            query: (createData) => ({
              url: "/accessory",
              method: "POST",
              data: createData,
            }),
            invalidatesTags: [tagTypes.accessory],
          }),
          updateAccessory: build.mutation({
            query: ({id, ...updatedData}) => ({
              url: `/accessory/${id}`,
              method: "PATCH", 
              body: updatedData,
            }),
            // invalidatesTags: [tagTypes.accessory],
          }),
          deleteAccessory: build.mutation({
            query: (id:string) => ({
              url: `/accessory/delete/${id}`,
              method: "DELETE",  
            }),
            invalidatesTags: [tagTypes.accessory],
          }),


    }),
});

export const { 
    useGetAccessoryAllQuery,
    useGetSingleAccessoryQuery,
    useCreateAccessoryMutation,
    useUpdateAccessoryMutation,
    useDeleteAccessoryMutation
} = accessoryApi 
