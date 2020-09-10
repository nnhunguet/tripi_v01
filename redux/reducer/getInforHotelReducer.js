import * as ActionTypes from '../actionTypes';

const initialNoteState = {
  payload: {
    data: []
  }
};

export default function getInforHotelReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.GET_INFOR_HOTEL_SUCCEEDED: 
      console.log(action.payload);
      return action.payload;
    case ActionTypes.GET_INFOR_HOTEL_FAILD: 
      console.log(action.payload); 
      console.log('faild cmnr');
      return state;  
    default:
      console.log(state);
      return state;
      break;
  }
}

