import * as ActionTypes from '../actionTypes';

const initialNoteState = [];

export default function keyWordReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.FETCH_SUCCEEDED:
      const { data } = action.payload; 
      console.log('Fetch Keyword');
      return data;

    case ActionTypes.FETCH_FAILD: 
      console.log(action.payload); 
      console.log('Fetch Fail');
      return state;

    default:
      return state;
      break;
  }
}

