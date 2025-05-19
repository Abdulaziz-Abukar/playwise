import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import dealsReducer from "../features/deals/dealsSlice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
    deals: dealsReducer,
  },
});
