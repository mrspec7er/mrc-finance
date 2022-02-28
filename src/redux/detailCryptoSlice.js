import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { detailCrypto } from '../services/detailCryptoService';

const initialState = {
  value: [],
}

export const fetchDetailCryptoSlice = createAsyncThunk(
    'crypto/getDetailCrypto',
    async(payload) => {
        const data = await detailCrypto(payload.cryptoId, payload.days, payload.interval);
        return data;
    }
)

export const detailCryptoSlice = createSlice({
  name: 'detailCrypto',
  initialState,
  reducers: {
    remove: (state) => {
      state.value = []
    }
  },
  extraReducers: (snapshot) => {
      snapshot
        .addCase(fetchDetailCryptoSlice.fulfilled, (state, action) => {
            state.value = action.payload;
            // state.value = action.payload;
        })
        .addCase(fetchDetailCryptoSlice.rejected, (state, action) => {
            state.value = action.payload;
        })
  }
})

// Action creators are generated for each case reducer function
export const { remove } = detailCryptoSlice.actions

export default detailCryptoSlice.reducer