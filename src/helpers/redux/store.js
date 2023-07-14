import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});