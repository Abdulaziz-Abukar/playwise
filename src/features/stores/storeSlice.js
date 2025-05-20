import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStores = createAsyncThunk("stores/fetch", async () => {
  const res = await fetch("https://www.cheapshark.com/api/1.0/stores");
  const data = await res.json();
  return data;
});

const storeSlice = createSlice({
  name: "stores",
  initialState: {
    storeMap: {}, // will hold {[storeID]: { storeName, images..}}
    status: "idle",
    error: "null",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStores.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStores.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchStores.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.storeMap = action.payload.reduce((acc, store) => {
          acc[store.storeID] = store;
          return acc;
        }, {});
      });
  },
});

export default storeSlice.reducer;
