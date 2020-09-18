import { Api5 }  from './ApiGetUrlHotel';
import { GET_URL_HOTEL_FAILD, GET_URL_HOTEL_SUCCESS, GET_URL_HOTEL } from '../redux/actionTypes';

import { put, takeEvery, } from 'redux-saga/effects';

function* getUrlHotel({payload}) {
  try {
    const urlHotel = yield Api5.getUrlHotels(payload.data);
    console.log('urlHotel: ', urlHotel);
    console.log(typeof urlHotel);
    yield put({ type: GET_URL_HOTEL_SUCCESS, payload: { data: urlHotel } }); 
  } 
  catch(err) {
    console.log('err');
    yield put({ type: GET_URL_HOTEL_FAILD, err });
  }
}

export function *watchGetUrlHotel() {
  yield takeEvery(GET_URL_HOTEL, getUrlHotel);
}