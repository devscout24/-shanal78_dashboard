import type { SubscriptionConfigResponseDto } from "@/types/plan";
import baseApi from "./index";

export const planApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlans: builder.query<SubscriptionConfigResponseDto, void>({
      query: () => "customer/plans",
      providesTags: ["PLANS"],
    }),
  }),
});

export const { useGetPlansQuery, useLazyGetPlansQuery } = planApi;
