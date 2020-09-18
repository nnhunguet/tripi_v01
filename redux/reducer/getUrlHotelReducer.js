import * as ActionTypes from '../actionTypes'; 
const initialNoteState = []

export default async function getUrlHotelReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.GET_URL_HOTEL_SUCCESS:
      console.log('action.payload', action.payload);
      return {data: action.payload};
    case ActionTypes.GET_URL_HOTEL_FAILD:
      return action.payload;
    default:
      return state;
      break;
  }
}

