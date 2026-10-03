import { auth } from "@/config/firebase";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export default createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: async (headers) => {
      await auth.authStateReady();
      const token = await auth.currentUser?.getIdToken(true);

      console.log("🚀 ~ index.ts:12 ~ token:", token);

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      headers.set("content-type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["PLANS"], // Add your tag types here
  endpoints: () => ({}),
});
