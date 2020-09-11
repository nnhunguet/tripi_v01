import axios from 'axios'
const token = 'UGhvZW5pWDpOTzEyRWs5Z1dLcEgxY3pnM1Z2dA==';
const url = 'https://tripgle.data.tripi.vn/get_price';
function* getAllPrice(arrDomainId) {
  // const data = {"hotel_ids": "2_3000020008985_20200830,3_4656943_20200830,_4656943_20200830"}
  const data = {"hotel_ids": arrDomainId.join(',')}
  
  let respone = yield axios.post(url, data, 
    {
    headers: {
      'Authorization': `Basic ${token}` 
    }
  }).then((res) => {
      let arrPrice = res.data.flat(1); 
      let sortArrPrice = arrPrice.sort((a,b) => {
        return a.final_amount - b.final_amount;
      });
      respone = sortArrPrice;
      console.log('sort', sortArrPrice);
      console.log('res', respone);
    })
    .catch(err => console.log(err))
    .then(() => {
      return respone;
    })
  console.log(respone);
  return respone;
}

export const Api3 = {
  getAllPrice
}