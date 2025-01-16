import { configureStore } from "@reduxjs/toolkit";
import { treatmentReducer } from "./reducers/treatmentReducer";

export const store = configureStore({
  reducer: {
    treatmentState: treatmentReducer, 
  },
});
