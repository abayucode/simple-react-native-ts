import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerInterface } from '../../interface/ReducerInterface';

const initialState: ReducerInterface = {
  loading: false,
  result: [],
  error: {},
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProductRequest: (state) => {
      state.loading = true;
      state.result = [];
      state.error = {};
    },
    getAllProductResult: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.result = action.payload;
      state.error = {};
    },
    getAllProductFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.result = [];
      state.error = action.payload;
    },
  },
});

export const {
  getAllProductRequest,
  getAllProductResult,
  getAllProductFailed,
} = productSlice.actions;

export default productSlice.reducer;

