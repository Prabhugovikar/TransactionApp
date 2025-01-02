import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './Dashbaord/transactionsSlice';

export const store = configureStore({
    reducer: {
      transactions: transactionsReducer,
    },
  });