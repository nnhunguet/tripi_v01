import { all } from 'redux-saga/effects';

import { watchFetchKeyWord } from './keyWordSaga';
import { watchGetHotels } from './getHotesSaga';

export default function* rootSaga() {
  yield all([
    watchFetchKeyWord(),
    watchGetHotels(),
  ])
}