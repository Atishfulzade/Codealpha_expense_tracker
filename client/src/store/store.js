import { configureStore } from "@reduxjs/toolkit";
import nameSliceReducer from "./nameSlice";
import dialogSliceReducer from "./dialogSlice";
export const store = configureStore({
  reducer: {
    name: nameSliceReducer,
    model: dialogSliceReducer,
  },
});
