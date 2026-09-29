import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import baseApi from "./api";
import persistedReducer from "./rootReducer";

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }).concat(baseApi.middleware as any),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
