import { put, takeLatest } from 'redux-saga/effects';
import apiFetch from '../../utils/apiFetch';
import { getAllProductRequest, getAllProductResult } from './productSlice';
import { getAllProductCategoryFailed } from '../productCategory/productCategorySlice';

function* getProducts(action: ReturnType<typeof getAllProductRequest>) {
  try {
    const result = yield apiFetch('https://dummyjson.com/products/category/' + action.payload, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    yield put(getAllProductResult(result));
  } catch (error: any) {
    yield put(getAllProductCategoryFailed(error.message));
  }
}

export default function* watchGetProductsSaga() {
  yield takeLatest(getAllProductRequest.type, getProducts);
}
