import * as ActionTypes from '../actionTypes'; 
const initialNoteState = []

export default function getUrlHotelReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.GET_URL_HOTEL_SUCCESS:
      const data = action.payload;
      return data;
    case ActionTypes.GET_URL_HOTEL_FAILD:
      return action.payload;
    default:
      return state;
      break;
  }
}

