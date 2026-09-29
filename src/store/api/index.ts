import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export default createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL, // Replace with your API base URL
    prepareHeaders: (headers) => {
      // Add auth token if available
      // const token = (getState() as RootState).auth?.token;
      // if (token) {
      //   headers.set("authorization", `Bearer ${token}`);
      // }
      headers.set("content-type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["PLANS"], // Add your tag types here
  endpoints: () => ({}),
});
