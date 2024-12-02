import { all, fork } from 'redux-saga/effects';
import watchGetProductCategorySaga from '../features/productCategory/productCategorySaga';
import watchGetProductsSaga from '../features/products/productSaga';

export default function* rootSaga() {
  yield all([
    fork(watchGetProductCategorySaga),
    fork(watchGetProductsSaga),
  ]);
}
