import { baseApi } from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFacility: builder.mutation({
      query: (payload) => {
        return {
          url: `/facility`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Facilities"],
    }),
    updateFacility: builder.mutation({
      query: ({ payload, id }) => {
        return {
          url: `/facility/${id}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: ["Facilities"],
    }),
    deleteFacility: builder.mutation({
      query: (id) => {
        return {
          url: `/facility/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Facilities"],
    }),
    getSingleFacility: builder.query({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "GET",
      }),
      providesTags: ["Facilities"],
    }),
    getAllFacilities: builder.query({
      query: () => ({
        url: `/facility`,
        method: "GET",
      }),
      providesTags: ["Facilities"],
    }),
  }),
});

export const {
  useCreateFacilityMutation,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
  useGetSingleFacilityQuery,
  useGetAllFacilitiesQuery,
} = facilityApi;
