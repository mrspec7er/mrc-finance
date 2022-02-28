import { configureStore } from '@reduxjs/toolkit';
import exchangeSlice from './exchangeSlice';
import bestCryptoSlice from './bestCryptoSlice';
import stockPriceSlice from './stockPriceSlice';
import detailCryptoSlice from './detailCryptoSlice';

export const store = configureStore({
  reducer: {
      exchange: exchangeSlice,
      bestCrypto: bestCryptoSlice,
      stockPrice: stockPriceSlice,
      detailCrypto: detailCryptoSlice 
  },
})