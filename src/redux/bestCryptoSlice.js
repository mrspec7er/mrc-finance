import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { bestCrypto } from '../services/bestCryptoService';

const initialState = {
  value: [],
}

export const fetchBestCryptoSlice = createAsyncThunk(
    'crypto/getBestCrypto',
    async(payload) => {
        const data = await bestCrypto(payload.page);
        return data;
    }
)

export const bestCryptoSlice = createSlice({
  name: 'bestCrypto',
  initialState,
  reducers: {
    remove: (state) => {
      state.value = []
    }
  },
  extraReducers: (snapshot) => {
      snapshot
        .addCase(fetchBestCryptoSlice.fulfilled, (state, action) => {
            state.value = [...state.value, ...action.payload];
            // state.value = action.payload;
        })
        .addCase(fetchBestCryptoSlice.rejected, (state, action) => {
            state.value = action.payload;
        })
  }
})

// Action creators are generated for each case reducer function
export const { remove } = bestCryptoSlice.actions

export default bestCryptoSlice.reducer