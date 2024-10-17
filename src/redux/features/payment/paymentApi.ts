import { baseApi } from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookingByTrxID: builder.query({
      query: (id) => ({
        url: `/payment/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBookingByTrxIDQuery } = facilityApi;
