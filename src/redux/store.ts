import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth/authSlice";
import companyReducer from "./features/company/companySlice";
import flowerReducer from "./features/flower/flowerSlice";
import salesReducer from "./features/sales/salesSlice";
import discountReducer from "./features/discount/discountSlice";
import cartReducer from "./features/cart/cartSlice";
// import tradingPartnerReducer from "./features/discount/tradingPartnerSlice";

const persistConfig = {
  key: "auth",
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    company: companyReducer,
    flower: flowerReducer,
    sales: salesReducer,
    discount: discountReducer,
    // tradingPartner: tradingPartnerReducer
    cart: cartReducer
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
