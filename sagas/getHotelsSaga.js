import { Api }  from './ApiGetHotels';
import { Api2 } from './ApiGetAllID';
import { Api3 } from './ApiGetAllPrice';
import { GET_HOTELS, GET_HOTELS_FAILD, GET_HOTELS_SUCCEEDED } from '../redux/actionTypes';

import { put, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from '../redux/actions';

function* getHotels({payload}) {
  try {
    yield put(showLoading());
    const hotels = yield Api.getHotels(payload.hotel);
    const filerHotels = hotels.length > 10 ? hotels.slice(0,9) : hotels;
    let allPrice = [];
    for(let hotel of filerHotels ) {
      let { hotel_id } = hotel;
      const getAllID = yield (Api2.getAllID(hotel_id));
      let arrDomain = [];
      for(let item of getAllID) {
        arrDomain.push(`${item.domain_id}_${item.domain_hotel_id}_1232131`);
      }
      const getAllPrice = yield (Api3.getAllPrice(arrDomain));
      allPrice.push(getAllPrice);
    }
    yield put({ type: GET_HOTELS_SUCCEEDED, payload: { data: filerHotels, allPrice: allPrice } });  
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