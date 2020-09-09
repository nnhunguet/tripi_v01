import * as ActionTypes from '../actionTypes';
const initialNoteState = [];
export default function getHotelsReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.GET_HOTELS_SUCCEEDED: 
      alert('123');
      console.log('get hotels succeeded');
      console.log(action.payload); 
      return action.payload;
    case ActionTypes.GET_HOTELS_FAILD: 
      console.log(action.payload); 
      console.log('faild');
      return state;  

    default:
      return state;
      break;
  }
}

