import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (payload) => {
        return {
          url: `/bookings`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Bookings"],
    }),
    cancelBooking: builder.mutation({
      query: (id) => {
        return {
          url: `/bookings/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Bookings"],
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: `/bookings`,
        method: "GET",
      }),
      providesTags: ["Bookings"],
    }),
    getBookingsByUser: builder.query({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "GET",
      }),
      providesTags: ["Bookings"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useCancelBookingMutation,
  useGetBookingsByUserQuery,
  useGetAllBookingsQuery,
} = bookingApi;
