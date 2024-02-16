import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";


const inventoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getInventories: build.query({
            query: (page) => ({
              url: `/inventory/list?page=${page}&limit=${5}`,
              method: "GET", 
            }), 
            providesTags: [tagTypes.inventory],
          }),
          getSingleInventory: build.query({
            query: (id) => ({
              url: `/inventory/single/${id}`,
              method: "GET", 
            }),
            providesTags: [tagTypes.vehicle],
          }),
          createInventory: build.mutation({
            query: (createData) => ({
              url: "/inventory/create",
              method: "POST",
              data: createData,
            }),
            invalidatesTags: [tagTypes.inventory],
          }),
          updateInventory: build.mutation({
            query: ({id, ...updatedData}) => ({
              url: `/inventory/update/${id}`,
              method: "PATCH", 
              body: updatedData,
            }),
            // invalidatesTags: [tagTypes.accessory],
          }),
          deleteInventory: build.mutation({
            query: (id:string) => ({
              url: `/inventory/delete/${id}`,
              method: "DELETE",  
            }),
            invalidatesTags: [tagTypes.inventory],
          }),


    }),
});

export const { 
    useGetInventoriesQuery,
    useGetSingleInventoryQuery,
    useCreateInventoryMutation,
    useUpdateInventoryMutation,
    useDeleteInventoryMutation
} = inventoryApi 
