import { Api }  from './ApiGetHotels';
import { GET_HOTELS, GET_HOTELS_FAILD, GET_HOTELS_SUCCEEDED } from '../redux/actionTypes';

import { put, takeLatest } from 'redux-saga/effects';

function* getHotels({payload}) {
  console.log('hotels', payload);
  try {
    const receivedHotels = yield Api.getHotels(payload.hotel);
    yield put({ type: GET_HOTELS_SUCCEEDED, payload: { data: receivedHotels } });  
  } 
  catch(err) {
    console.log('err');
    yield put({ type: GET_HOTELS_FAILD, err });
  }
}

export function *watchGetHotels() {
  yield takeLatest(GET_HOTELS, getHotels);
}