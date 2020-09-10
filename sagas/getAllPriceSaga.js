import { Api }  from './ApiGetAllPrice';
import { GET_ALL_PRICE, GET_ALL_PRICE_SUCCESS, GET_ALL_PRICE_FAILD } from '../redux/actionTypes';

import { put, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from '../redux/actions';

function* getAllPrices({id}) {
  try {
    yield put(showLoading());
    const allPrices = yield Api.getAllPrice(id);
    yield put({ type: GET_ALL_PRICE_SUCCESS, payload: { data: allPrices } });  
  } 
  catch(err) {
    console.log('err');
    yield put({ type: GET_ALL_PRICE_FAILD, err });
  }
  yield put(hideLoading());
}

export function *watchGetAllPrices() {
  yield takeLatest(GET_ALL_PRICE, getAllPrices);
}