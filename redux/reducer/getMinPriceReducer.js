import * as ActionTypes from '../actionTypes'; 
import {Api4} from '../../sagas/ApiGetMinPrice';
const initialNoteState = []

export default async function getMinPriceReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.GET_MIN_PRICE:
      if(action.payload.data) {
        console.log(price);
      }
      return action.payload;
    default:
      return state;
      break;
  }
}

