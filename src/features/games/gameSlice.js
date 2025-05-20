// features/games/gameSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchGameById = createAsyncThunk(
  "game/fetchById",
  async (gameID) => {
    const res = await fetch(
      `https://www.cheapshark.com/api/1.0/games?id=${gameID}`
    );
    const data = await res.json();
    return data;
  }
);

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    clearGame: (state) => {
      state.data = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGameById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGameById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchGameById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearGame } = gameSlice.actions;
export default gameSlice.reducer;
