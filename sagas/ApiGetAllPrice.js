const urlAllIdHotels = 'http://13.250.18.254:5000/hotels/getAllId'
import axios from 'axios'
function* getAllPrice() {
  let response;
  yield axios.get(`${urlAllIdHotels}/${id}`)
  .then(function (res) {
    console.log(res.data);
    const token = 'UGhvZW5pWDpOTzEyRWs5Z1dLcEgxY3pnM1Z2dA==';
    const urlPrice = 'https://tripgle.data.tripi.vn/get_price';
    const data = {"hotel_ids": `${id}`}

    axios.post(urlPrice, data, 
      {
      headers: {
        'Authorization': `Basic ${token}` 
      }
    }).then(res => console.log(res.data))
      .catch(err => console.log(err));
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
  getAllPrice
}