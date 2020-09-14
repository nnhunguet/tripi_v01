import * as ActionTypes from '../actionTypes';

const initialNoteState = []

export default function filterReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.GET_ALL_PRICE_SUCCESS: 
      console.log('get all price success');
      return action.payload;
    case ActionTypes.GET_ALL_PRICE_FAILD: 
      console.log('get all price faild');
      return state;
    default:
      return state;
      break;
  }
}

