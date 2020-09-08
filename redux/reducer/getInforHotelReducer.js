import * as ActionTypes from '../actionTypes';

const initialNoteState = null;

export default function getInforHotelReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.GET_INFOR_HOTEL_SUCCEEDED: 
      return action.payload;
    case ActionTypes.GET_INFOR_HOTEL_FAILD: 
      console.log(action.payload); 
      console.log('faild cmnr');
      return state;  

    default:
      return state;
      break;
  }
}

