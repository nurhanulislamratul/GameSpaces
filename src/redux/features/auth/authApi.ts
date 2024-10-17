import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (payload) => {
        return {
          url: `/auth/signup`,
          method: "POST",
          body: payload,
        };
      },
    }),
    login: builder.mutation({
      query: (payload) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = bookingApi;
