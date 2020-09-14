const getMinPriceUrl = 'http://13.250.18.254:5000/getPrice';
import axios from 'axios';

async function getAllPrice(id) {
  let response;
  await axios.get(`${getMinPriceUrl}/${id}`)
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

export const Api4 = {
  getAllPrice
}