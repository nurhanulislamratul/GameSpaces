import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkAvailability: builder.query({
      query: ({ date, id }) => {
        return {
          url: `/check-availability?date=${date}&facility=${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCheckAvailabilityQuery } = bookingApi;
