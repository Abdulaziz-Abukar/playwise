import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockSearchResults } from "../../data/mockData";

const initialState = {
  results: [],
  status: "idle", // "loading" | "succeeded", "failed"
  error: null, // | "string"
};

export const mockSearchGames = createAsyncThunk("search/fetch", () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.1; // 10% chance of failure
      if (shouldFail) {
        reject(new Error("Mock API failed"));
      } else {
        resolve(mockSearchResults);
      }
    }, 3000);
  });
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(mockSearchGames.pending, (state) => {
        state.status = "loading";
      })
      .addCase(mockSearchGames.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(mockSearchGames.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.results = action.payload;
      });
  },
});

export default searchSlice.reducer;
