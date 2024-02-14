import { baseApi } from "./baseApi";

const driverUrl = "/driver-salary";

const driverSalaryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDriverSalary: build.mutation({
      query: (data: any) => ({
        url: `${driverUrl}/create`,
        method: "POST",
        data: data,
      }),
    }),
    getAllDriverSalary: build.query({
      query: (params: any) => ({
        url: `${driverUrl}/list`,
        method: "GET",
        params,
      }),
      // providesTags: [tagTypes.driverSalary],
    }),
    getSingleDriverSalary: build.query({
      query: (id: any) => ({
        url: `${driverUrl}/${id}`,
        method: "GET",
      }),
      // providesTags: [tagTypes.driverSalary],
    }),
    updateDriverSalary: build.mutation({
      query: (id: any) => ({
        url: `${driverUrl}/update/${id}`,
        method: "PATCH",
      }),
      // providesTags: [tagTypes.driverSalary],
    }),
    deleteDriverSalary: build.mutation({
      query: (id: any) => ({
        url: `${driverUrl}/delete/${id}`,
        method: "DELETE",
      }),
      // providesTags: [tagTypes.driverSalary],
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
