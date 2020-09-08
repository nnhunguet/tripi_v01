const urlGetHotels = 'http://13.250.18.254:5000/hotels/getByID';
import axios from 'axios'

function* getInforHotel(id) {
  let response;
  yield axios.get(`${urlGetHotels}/${id}`)
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
  getInforHotel
}