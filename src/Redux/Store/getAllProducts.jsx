import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsAction = createAsyncThunk("fetchData", async () => {
  const res = await axios.get("http://localhost:1997/products");
  return res.data;
});
const productsSlice = createSlice({
  name: "products",
  initialState: { products: [], loading: false, status: true },
  extraReducers: (builder) => {
    builder.addCase(productsAction.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(productsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(productsAction.rejected, (state, action) => {
      state.status = false;
    });
  },
});
export default productsSlice.reducer;
