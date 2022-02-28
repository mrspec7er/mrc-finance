import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { exchange } from '../services/exchangeService';

const initialState = {
  value: null,
}

export const fetchDataSlice = createAsyncThunk(
    'exchange/getData',
    async(payload) => {
        const data = await exchange(payload.toCurrency, payload.fromCurrency);
        return data;
    }
)

export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    remove: (state) => {
      state.value = null
    }
  },
  extraReducers: (snapshot) => {
      snapshot
        .addCase(fetchDataSlice.fulfilled, (state, action) => {
            state.value = action.payload
        })
        .addCase(fetchDataSlice.rejected, (state, action) => {
            state.value = action.payload
        })
  }
})

// Action creators are generated for each case reducer function
export const { remove } = exchangeSlice.actions

export default exchangeSlice.reducer