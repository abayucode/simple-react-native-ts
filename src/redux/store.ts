import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import productCategoryReducer from '../features/productCategory/productCategorySlice';
import productReducer from '../features/products/productSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    productCategory: productCategoryReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
