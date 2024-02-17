import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";


const inventoryRequestApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllRequest: build.query({
            query: (page) => ({
                url: `/inventoryRequest?page=${page}&limit=${5}`,
                method: "GET",
            }),
            providesTags: [tagTypes.request],
        }),

        createRequest: build.mutation({
            query: (createData) => ({
                url: "/inventoryRequest",
                method: "POST",
                data: createData,
            }),
            invalidatesTags: [tagTypes.request],
        }),
        updateRequest: build.mutation({
          query: ({id, ...data}) => ({
            url: `/inventoryRequest/update/${id}`,
            method: "PATCH", 
            data: data,
          }),
          invalidatesTags: [tagTypes.driver],
        }),
        // deleteDriver: build.mutation({
        //   query: (id) => ({
        //     url: `/driver/delete/${id}`,
        //     method: "DELETE",  
        //   }),
        //   invalidatesTags: [tagTypes.driver],
        // }),
    }),
});

export const {
    useCreateRequestMutation, useGetAllRequestQuery,useUpdateRequestMutation
} = inventoryRequestApi;
