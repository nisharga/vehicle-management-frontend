import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const manageRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getManageRequests: build.query({
      query: (page) => ({
        url: `/inventoryRequest?page=${page}&limit=${5}`,
        method: "GET",
      }),
      providesTags: [tagTypes.manageRequest],
    }),

    createRequest: build.mutation({
      query: (createData) => ({
        url: "/manageRequest",
        method: "POST",
        data: createData,
      }),
      invalidatesTags: [tagTypes.manageRequest],
    }),
    updateRequest: build.mutation({
      query: (data) => ({
        url: "/inventoryRequest/updateRequest",
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.manageRequest],
    }),
  }),
});

export const {
  useCreateRequestMutation,
  useGetManageRequestsQuery,
  useUpdateRequestMutation,
} = manageRequestApi;
