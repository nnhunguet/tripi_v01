import { port } from './constants';
const urlGetHotels = `${port}/gethotels`;
import axios from 'axios'
function* getHotels(hotel) {
  console.log('hotel',hotel);
  let search_id = hotel.search_id ? hotel.search_id : hotel;
  let type_code = hotel.type_code ? hotel.type_code : 0; 
  let filters = hotel.filters ? hotel.filters : 15; 
  let start_number = hotel.start_number ? hotel.start_number : 6; 
  let response;
  yield axios.get(`${urlGetHotels}/${search_id}/${type_code}/${filters}/${start_number}`)
  .then(function (res) {
    // handle success
    response = res.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  return response;
}

export const Api = {
  getHotels
}