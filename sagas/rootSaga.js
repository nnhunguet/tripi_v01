import { all } from 'redux-saga/effects';

import { watchFetchKeyWord } from './keyWordSaga';
import { watchGetHotels } from './getHotelsSaga';
import { watchGetInforHotel } from './getInforHotelSaga'
import { watchGetAllPrices } from './getAllPriceSaga'
import { watchGetUrlHotel } from './getUrlHotel'

export default function* rootSaga() {
  
  yield all([
    watchFetchKeyWord(),
    watchGetHotels(),
    watchGetInforHotel(),
    watchGetAllPrices(),
    watchGetUrlHotel(),
  ])
}