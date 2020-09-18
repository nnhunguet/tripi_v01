const getUrlHotel = 'http://13.250.18.254:5000/hotels/getAllId';
import axios from 'axios';

function* getUrlHotels(id) {
  let response;
  yield axios.get(`${getUrlHotel}/${id}`)
  .then(function (res) {
    // handle success
    response = res.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  return response;
}

export const Api5 = {
  getUrlHotels
}