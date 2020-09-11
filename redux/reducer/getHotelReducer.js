import * as ActionTypes from '../actionTypes';
const initialNoteState = [];
export default function getHotelsReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.GET_HOTELS_SUCCEEDED: 
      return action.payload;
    case ActionTypes.GET_HOTELS_FAILD: 
      return state;  
    default:
      return state;
      break;
  }
}

