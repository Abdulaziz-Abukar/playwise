import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  status: "idle", // "loading" | "succeeded", "failed"
  error: null, // | "string"
};

export const fetchGamesByTitle = createAsyncThunk(
  "search/fetch",
  async (gameName) => {
    const res = await fetch(
      `https://www.cheapshark.com/api/1.0/games?title=${gameName}`
    );
    const data = await res.json();

    return data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesByTitle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGamesByTitle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchGamesByTitle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.results = action.payload;
      });
  },
});

export default searchSlice.reducer;
