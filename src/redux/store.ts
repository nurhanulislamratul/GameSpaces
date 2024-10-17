import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import AuthReducer from "./features/auth/AuthSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PERSIST,
} from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, AuthReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }).concat(baseApi.middleware),
});

//? Redux neccessery types
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistore = persistStore(store);
