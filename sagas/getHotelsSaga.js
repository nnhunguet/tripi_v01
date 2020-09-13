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
    const filerHotels = hotels.length > 10 ? hotels.slice(0,10) : hotels;
    let allPrice = [];
    for(let i = 0; i < filerHotels.length; i++) {
      let objHotelUrl = {};
      let { hotel_id } = filerHotels[i];
      const getAllID = yield (Api2.getAllID(hotel_id));
      let arrDomain = [];
      for(let item of getAllID) {
        let cur = `${item.domain_id}`;
        objHotelUrl[cur] = item.hotel_url;
        arrDomain.push(`${item.domain_id}_${item.domain_hotel_id}_20200830`);
      }
      let getAllPrice = yield (Api3.getAllPrice(arrDomain));
      allPrice.push(getAllPrice);
      filerHotels[i]['final_amount'] = getAllPrice.length > 0 ? getAllPrice[0].final_amount : -1 ;
      if(allPrice[allPrice.length-1].length > 0) {
        filerHotels[i]['hotel_url'] = objHotelUrl[`${allPrice[allPrice.length-1][0].domain_id}`]
      } else {
        filerHotels[i]['hotel_url'] = '???'
      }
    }
    yield put({ type: GET_HOTELS_SUCCEEDED, payload: { data: filerHotels, allPrice: allPrice,} });  
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