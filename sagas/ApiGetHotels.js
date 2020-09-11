const urlGetHotels = 'http://13.250.18.254:5000/hotels/gethotels'
import axios from 'axios'
function* getHotels(hotel) {
  console.log(hotel);
  let search_id = hotel.search_id ? hotel.search_id : hotel;
  let type_code = hotel.type_code ? hotel.type_code : 0; 
  let response;
  yield axios.get(`${urlGetHotels}/${search_id}/${type_code}/15/6`)
  .then(function (res) {
    // handle success
    response = res.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  // const token = 'UGhvZW5pWDpOTzEyRWs5Z1dLcEgxY3pnM1Z2dA==';
  // const urlPrice = 'https://tripgle.data.tripi.vn/get_price';
  // const data = {"hotel_ids": `${id}`}

  // yield axios.post(urlPrice, data, 
  //   {
  //   headers: {
  //     'Authorization': `Basic ${token}` 
  //   }
  // }).then(res => console.log(res.data))
  //   .catch(err => console.log(err));
  return response;
}

export const Api = {
  getHotels
}