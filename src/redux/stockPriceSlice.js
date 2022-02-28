import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { stockPrice } from '../services/stockService';

const initialState = {
  value: null,
}

export const fetchStockPriceSlice = createAsyncThunk(
    'stockPrice/getData',
    async(payload) => {
        const data = await stockPrice(payload.symbol);
        return data;
    }
)

export const stockPriceSlice = createSlice({
  name: 'stockPrice',
  initialState,
  reducers: {
    remove: (state) => {
      state.value = null
    }
  },
  extraReducers: (snapshot) => {
      snapshot
        .addCase(fetchStockPriceSlice.fulfilled, (state, action) => {
            state.value = action.payload
        })
        .addCase(fetchStockPriceSlice.rejected, (state, action) => {
            state.value = action.payload
        })
  }
})

// Action creators are generated for each case reducer function
export const { remove } = stockPriceSlice.actions

export default stockPriceSlice.reducer