import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockDeals } from "../../data/mockDealData";

const initialState = {
  results: [],
  status: "idle", // "loading" | "succeeded", "failed"
  error: null, // | "string"
};

export const mockFetchDeals = createAsyncThunk("deals/fetch", () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.1; // 10% chance of failure
      if (shouldFail) {
        reject(new Error("Mock API failed"));
      } else {
        resolve(mockDeals);
      }
    }, 3000);
  });
});

const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(mockFetchDeals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(mockFetchDeals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(mockFetchDeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.results = action.payload;
      });
  },
});

export default dealsSlice.reducer;
