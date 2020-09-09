const urlGetHotels = 'http://13.250.18.254:5000/hotels/gethotels'
import axios from 'axios'
import { useSelector } from 'react-redux'
function* getHotels(hotel) {
  const filter = useSelector(state => state.filterReducer);
  console.log(filter);
  let { search_id, type_code } = hotel;
  let response;
  yield axios.get(`${urlGetHotels}/${search_id}/${type_code}/15/6`)
  .then(function (res) {
    // handle success
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