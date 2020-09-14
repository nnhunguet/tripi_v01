const urlGetAllID = 'http://13.250.18.254:8000/hotels/getAllId';
import axios from 'axios';

function* getAllID(id) {
  let response;
  yield axios.get(`${urlGetAllID}/${id}`)
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

export const Api2 = {
  getAllID
}