import type { IState } from "@/types/state";
import baseApi from "./index";

const stateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStates: builder.query<IState[], void>({
      query: () => "customer/states",
    }),
  }),
});

export const { useGetStatesQuery } = stateApi;
