const urlGetHotels = 'http://13.250.18.254:5000/hotels/getByID';
import axios from 'axios';

function* getInforHotel(id) {
  let response;
  // const token = 'UGhvZW5pWDpOTzEyRWs5Z1dLcEgxY3pnM1Z2dA==';
  // const urlPrice = 'https://tripgle.data.tripi.vn/get_price';

  // axios.post(urlPrice, data, 
  //   {
  //   headers: {
  //     'Authorization': `Basic ${token}` 
  //   }
  // }).then(res => console.log(res.data))
  //   .catch(err => console.log(err));
  yield axios.get(`${urlGetHotels}/${id}`)
  .then(function (res) {
    // handle success
    response = res.data;
    console.log(response);
    // let a = await axios.get(`http://13.250.18.254:5000/hotels/getAllId/${id}`);
    // console.log(a.data);
    // const data = {"hotel_ids": `${a[0]}`}
    // axios.post(urlPrice, data, 
    //   {
    //   headers: {
    //     'Authorization': `Basic ${token}` 
    //   }
    // }).then(res => console.log(res.data))
    //   .catch(err => console.log(err));
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