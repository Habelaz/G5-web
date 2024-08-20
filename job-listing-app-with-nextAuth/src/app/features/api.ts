'use client'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const opportunitiesApi = createApi({
  reducerPath: 'opportunitiesApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/" }),
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => "opportunities/search",
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/signup",
        method: "POST",
        body: userData,
      }),
    }),
    verifyEmail: builder.mutation<void, { email: string; OTP: string }>({
        query: (body) => ({
          url: "verify-email",
          method: "POST",
          body,
        }),
      }),
      signIn: builder.mutation<void, { email: string; password: string }>({
        query: (body) => ({
          url: "login",
          method: "POST",
          body,
        }),
    }),
  }),
});

export const { useGetAllJobsQuery, useRegisterUserMutation,useVerifyEmailMutation,useSignInMutation } = opportunitiesApi;
