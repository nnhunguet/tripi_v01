import { Api }  from './ApiGetInforHotel';
import { GET_INFOR_HOTEL, GET_INFOR_HOTEL_SUCCEEDED, GET_INFOR_HOTEL_FAILD } from '../redux/actionTypes';

import { put, takeLatest } from 'redux-saga/effects';

function* getInforHotel({payload}) {
  console.log('getInfor');
  console.log(payload);
  const id = payload.hotel_id;
  try {
    const inforHotel = yield Api.getInforHotel(id);
    console.log(inforHotel);
    yield put({ type: GET_INFOR_HOTEL_SUCCEEDED, payload: { data: inforHotel } });  
  } 
  catch(err) {
    console.log('err');
    yield put({ type: GET_INFOR_HOTEL_FAILD, err });
  }
}

export function *watchGetInforHotel() {
  yield takeLatest(GET_INFOR_HOTEL, getInforHotel);
}