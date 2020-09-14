import { port } from './constants';
const urlKeyWordSuggestion = `${port}/keywordsuggestion/`;
import axios from 'axios'

function* getKeyWordSuggestion(keyword) {
  let response;
  yield axios.get(urlKeyWordSuggestion+keyword)
  .then(function (res) {
    // handle success
    response = res.data;
  })
  .catch(function (error) {
    // handle error
    response = error;
    console.log(error);
  })
  .then(function () {
    return response;
  });
  return response;
}

export const Api = {
  getKeyWordSuggestion
}