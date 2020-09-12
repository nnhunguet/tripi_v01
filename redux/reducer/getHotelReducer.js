import * as ActionTypes from '../actionTypes';
const initialNoteState = [];
export default function getHotelsReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.GET_HOTELS:
      return action.payload;
    case ActionTypes.GET_HOTELS_SUCCEEDED: 
      console.log({
        ...state,
        ...action.payload,
      })
      return {
        ...state,
        ...action.payload,
      }
    case ActionTypes.GET_HOTELS_FAILD: 
      return state;  
    default:
      return state;
      break;
  }
}

