import { put, takeLatest } from 'redux-saga/effects';
import { getAllProductCategoryFailed, getAllProductCategoryRequest, getAllProductCategoryResult } from './productCategorySlice';
import apiFetch from '../../utils/apiFetch';

function* handleGetProductCategory(action: ReturnType<typeof getAllProductCategoryRequest>) {
  try {
    const result: any = yield apiFetch('https://dummyjson.com/products/categories', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    yield put(getAllProductCategoryResult(result));
  } catch (error: any) {
    yield put(getAllProductCategoryFailed(error.message));
  }
}

export default function* watchGetProductCategorySaga() {
  yield takeLatest(getAllProductCategoryRequest.type, handleGetProductCategory);
}
