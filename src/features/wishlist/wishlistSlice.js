import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    // Add to WishList (push game)
    addToWishlist: (state, action) => {
      const game = state.find((game) => game.id === action.payload.id);

      if (!game) {
        state.push(action.payload);
      }
    },

    // Remove from Wishlist (game.id)
    removeFromWishlist: (state, action) => {
      return state.filter((game) => game.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
