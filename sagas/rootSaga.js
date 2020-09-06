import { all } from 'redux-saga/effects';

import { watchFetchKeyWord } from './keyWordSaga';

export default function* rootSaga() {
  yield all([
    watchFetchKeyWord()
  ])
}