import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch transactions
export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const response = await fetch('/api/transactions',requestOptions);
      const result = await response.json();
      console.log('result', result)
      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }
      return await result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {}, // No regular reducers for now
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default transactionsSlice.reducer;
