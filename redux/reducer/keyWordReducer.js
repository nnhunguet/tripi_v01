import * as ActionTypes from '../actionTypes';

const initialNoteState = [];

export default function keyWordReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.FETCH_SUCCEEDED:
      const { data } = action.payload; 
      console.log(data);
      console.log('Fetch Keyword');
      return data;

    case ActionTypes.FETCH_FAILD: 
      console.log(action.payload); 
      console.log('Fetch Fail');
      return [];
    default:
      return state;
      break;
  }
}

