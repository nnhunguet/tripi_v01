import { Api }  from './ApiGetInforHotel';
import { Api2 } from './ApiGetAllID';
import { Api3 } from './ApiGetAllPrice';
import { GET_INFOR_HOTEL, GET_INFOR_HOTEL_SUCCEEDED, GET_INFOR_HOTEL_FAILD } from '../redux/actionTypes';

import { put, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from '../redux/actions';

function* getInforHotel({ payload }) {
  const { hotel_id} = payload;
  try {
    yield put(showLoading());
    const inforHotel = yield (Api.getInforHotel(hotel_id));
    console.log('getInforHotel - Saga', inforHotel);
    const getAllID = yield (Api2.getAllID(hotel_id));
    // console.log(getAllID);
    let arrDomian = [];
    for(let item of getAllID) {
      arrDomian.push(`${item.domain_id}_${item.domain_hotel_id}_1232131`);
    }
    console.log(arrDomian);
    const getAllPrice = yield (Api3.getAllPrice(arrDomian));
    console.log('all price',getAllPrice);
    yield put({ type: GET_INFOR_HOTEL_SUCCEEDED, payload: { data: inforHotel } });  
  } 
  catch(err) {
    console.log('err');
    yield put({ type: GET_INFOR_HOTEL_FAILD, err });
  }
  yield put(hideLoading());
}

export function *watchGetInforHotel() {
  yield takeLatest(GET_INFOR_HOTEL, getInforHotel);
}