import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../firebase/data/getCollections';
import { fetchCategoriesFailed, fetchCategoriesSuccess } from './cat.action';
import { CatActionType } from './dto';

export function* fetchCategoriesAsync() {
  try {
    // @ts-ignore
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    // @ts-ignore
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    // @ts-ignore
    yield put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(CatActionType.FetchCatStart, fetchCategoriesAsync);
}

export function* catSaga() {
  yield all([call(onFetchCategories)]);
}
