import { port } from './constants';
const urlGetHotels = `${port}/gethotels`;
import axios from 'axios'
function* getHotels(hotel) {
  console.log('hotel',hotel);
  let search_id = hotel.search_id ? hotel.search_id : hotel;
  let type_code = hotel.type_code ? hotel.type_code : 0; 
  let filters = hotel.service ? hotel.service.join('_') : 15; 
  let star_number = hotel.star ? hotel.star.join('_') : 6; 
  let response;
  console.log(`${urlGetHotels}/${search_id}/${type_code}/${filters}/${star_number}`);
  yield axios.get(`${urlGetHotels}/${search_id}/${type_code}/${filters}/${star_number}`)
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