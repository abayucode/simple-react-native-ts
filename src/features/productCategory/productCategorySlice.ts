import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerInterface } from '../../interface/ReducerInterface';

const initialState: ReducerInterface = {
  loading: false,
  result: [],
  error: {},
};

export const productCategorySlice = createSlice({
  name: 'productCategory',
  initialState,
  reducers: {
    getAllProductCategoryRequest: (state) => {
      state.loading = true;
      state.result = [];
      state.error = {};
    },
    getAllProductCategoryResult: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.result = action.payload;
      state.error = {};
    },
    getAllProductCategoryFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.result = [];
      state.error = action.payload;
    },
  },
});

export const {
  getAllProductCategoryRequest,
  getAllProductCategoryResult,
  getAllProductCategoryFailed,
} = productCategorySlice.actions;

export default productCategorySlice.reducer;
