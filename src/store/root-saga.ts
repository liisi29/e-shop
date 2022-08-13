import { all, call } from 'redux-saga/effects';

import { catSaga } from './cat/cat.saga';

export function* rootSaga() {
  yield all([call(catSaga)]);
}
