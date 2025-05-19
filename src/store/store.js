import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import dealsReducer from "../features/deals/dealsSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
    deals: dealsReducer,
    wishlist: wishlistReducer,
  },
});
