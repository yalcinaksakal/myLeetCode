import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./login-slice";
import webReducer from "./web-slice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    web: webReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
