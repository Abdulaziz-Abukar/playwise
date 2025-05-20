import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  dealsList: [],
  status: "idle", // "loading" | "succeeded", "failed"
  error: null, // | "string"
};

export const fetchDeals = createAsyncThunk("deals/fetch", async () => {
  const res = await fetch("https://www.cheapshark.com/api/1.0/deals");
  const data = await res.json();
  return data;
});

const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dealsList = action.payload;
      });
  },
});

export default dealsSlice.reducer;
