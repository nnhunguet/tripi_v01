import { all } from 'redux-saga/effects';

import { watchFetchKeyWord } from './keyWordSaga';
import { watchGetHotels } from './getHotelsSaga';
import { watchGetInforHotel } from './getInforHotelSaga'

export default function* rootSaga() {
  yield all([
    watchFetchKeyWord(),
    watchGetHotels(),
    watchGetInforHotel(),
  ])
}