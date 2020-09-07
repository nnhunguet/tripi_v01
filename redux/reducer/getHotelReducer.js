import * as ActionTypes from '../actionTypes';

const initialNoteState = [];

export default function getHotelsReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.GET_HOTELS_SUCCEEDED: 
      console.log(action.payload); 
      console.log('get hotels succeeded');
      return state;
    case ActionTypes.GET_HOTELS_FAILD: 
      console.log(action.payload); 
      console.log('faild');
      return state;  

    default:
      return state;
      break;
  }
}

