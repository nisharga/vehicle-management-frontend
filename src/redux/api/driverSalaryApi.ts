import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const driverSalaryUrl = "/driver-salary";

const driverSalaryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDriverSalary: build.mutation({
      query: (data: any) => ({
        url: `${driverSalaryUrl}/create`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.driverSalary],
    }),
    getAllDriverSalary: build.query({
      query: (page) => ({
        url: `${driverSalaryUrl}/list?page=${page}&limit=${5}`,
        method: "GET",
      }),
      providesTags: [tagTypes.driverSalary],
    }),
    getSingleDriverSalary: build.query({
      query: (id: any) => ({
        url: `${driverSalaryUrl}/single/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.driverSalary],
    }),
    updateDriverSalary: build.mutation({
      query: (data) => ({
        url: `${driverSalaryUrl}/update/${data?.id}`,
        method: "PATCH",
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.driverSalary],
    }),
    deleteDriverSalary: build.mutation({
      query: (id: any) => ({
        url: `${driverSalaryUrl}/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.driverSalary],
    }),
  }),
});

export const {
  useCreateDriverSalaryMutation,
  useGetAllDriverSalaryQuery,
  useGetSingleDriverSalaryQuery,
  useUpdateDriverSalaryMutation,
  useDeleteDriverSalaryMutation,
} = driverSalaryApi;
