import type { SubscriptionConfigResponseDto } from "@/types/plan";
import baseApi from "./index";

export const planApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlans: builder.query<SubscriptionConfigResponseDto, void>({
      query: () => "customer/plans",
      providesTags: ["PLANS"],
    }),

    sendLead: builder.mutation<
      { lead_id: string; received_at: string },
      {
        name: string;
        email: string;
        company: string;
        users: string;
        message: string;
      }
    >({
      query: (body) => ({
        url: "customer/enterprise-lead",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetPlansQuery, useSendLeadMutation } = planApi;
