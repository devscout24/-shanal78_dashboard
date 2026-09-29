import type { SubscriptionConfigResponseDto } from "@/types/plan";
import { baseApi } from ".";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlans: builder.query<SubscriptionConfigResponseDto, void>({
      query: () => "customer/plans",
      providesTags: ["PLANS"],
    }),
  }),
});

export const { useGetPlansQuery, useLazyGetPlansQuery } = authApi;
