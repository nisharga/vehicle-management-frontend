import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  // working on mobarak hossen 
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://simple-book-catalog-application-5-server.vercel.app/api/v1/",
  }),
  endpoints: (builder) => ({
    getSalaryList: builder.query({
      query: ({ page = 1, size = 10, searchTerm = "" }) =>
        `driver-salary/list?page=${page}&size=${size}&searchTerm=${searchTerm}`,
    }),
  }),
});


export const {useGetSalaryListQuery} = baseApi














// ({
//   reducerPath: "api",
//   baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
//   endpoints: (builder) => ({
//     //end points..
//   }),
//   tagTypes: ["user"],
// });
