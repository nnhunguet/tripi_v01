const urlGetHotels = 'http://13.250.18.254:5000/hotels/gethotels'
import axios from 'axios'

function* getHotels(hotel) {
  let { search_id, type_code } = hotel;
  let response;
  yield axios.get(`${urlGetHotels}/${search_id}/${type_code}/15/5`)
  .then(function (res) {
    // handle success
    console.log(res.data);
    response = res.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    return response;
  });
  return response;
}

export const Api = {
  getHotels
}