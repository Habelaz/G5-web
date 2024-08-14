'use client'
// import { createApi } from "@reduxjs/toolkit/query";
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const opportunitiesApi = createApi({
    reducerPath:'opportunitiesApi',
    baseQuery :fetchBaseQuery({baseUrl:"https://akil-backend.onrender.com/"}),
    endpoints: (builder) => ({
        getAllJobs:builder.query({
            query: () => "opportunities/search",
        })
    })

})

export const { useGetAllJobsQuery } = opportunitiesApi