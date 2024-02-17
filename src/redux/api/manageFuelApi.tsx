import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";


const manageFuelApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getManageFuel: build.query({
            query: (page) => ({
                url: `/manage-fuel/list?page=${page}&limit=${5}`,
                method: "GET",
            }),
            providesTags: [tagTypes.manageFuel],
        }),

        createRequest: build.mutation({
            query: (createData) => ({
                url: "/manageRequest",
                method: "POST",
                data: createData,
            }),
            invalidatesTags: [tagTypes.manageFuel],
        }),
        updateRequest: build.mutation({
          query: (data) => ({
            url: "/inventoryRequest/updateRequest",
            method: "PATCH", 
            data: data,
          }),
          invalidatesTags: [tagTypes.manageFuel],
        }),
        
    }),
});

export const {
    useCreateRequestMutation, useGetManageFuelQuery,useUpdateRequestMutation
} = manageFuelApi;
