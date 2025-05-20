// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import dealsReducer from "../features/deals/dealsSlice";
import gameReducer from "../features/games/gameSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import storeReducer from "../features/stores/storeSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    deals: dealsReducer,
    game: gameReducer,
    wishlist: wishlistReducer,
    stores: storeReducer,
  },
});
