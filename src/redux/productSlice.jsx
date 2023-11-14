/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchProduct = createAsyncThunk("productSlice/fetchProduct",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("http://localhost:3005/mobiles");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  })

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    isloading: false,
    error: false,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.isloading = true;
        state.error = false;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isloading = false;
        state.error = false;
      })

      .addCase(fetchProduct.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
})

export const { } = productSlice.actions

export default productSlice.reducer