import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageModule from "redux-persist/lib/storage";
const storage = storageModule.default ?? storageModule;
import baseApi from "./api";
import authSlice from "./slices/auth.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Add slice names you want to persist
};

const rootReducer = combineReducers({
  auth: authSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default persistedReducer;
