import { Api }  from './ApiGetHotels';
import { GET_HOTELS, GET_HOTELS_FAILD, GET_HOTELS_SUCCEEDED } from '../redux/actionTypes';

import { put, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from '../redux/actions';

function* getHotels({payload}) {
  try {
    yield put(showLoading());
    console.log(payload);
    const hotels = yield Api.getHotels(payload.hotel);
    console.log(hotels);
    yield put({ type: GET_HOTELS_SUCCEEDED, payload: { data: hotels } });  
  } 
  catch(err) {
    console.log('err');
    yield put({ type: GET_HOTELS_FAILD, err });
  }
  yield put(hideLoading());
}

export function *watchGetHotels() {
  yield takeLatest(GET_HOTELS, getHotels);
}