import * as ActionTypes from '../actionTypes';

const initialNoteState = null;

export default function getHotelsReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.GET_INFOR_HOTEL_SUCCEEDED: 
      console.log(action.payload); 
      console.log('get infor hotels succeeded');
      return state;
    case ActionTypes.GET_INFOR_HOTEL_FAILD: 
      console.log(action.payload); 
      console.log('faild cmnr');
      return state;  

    default:
      return state;
      break;
  }
}

