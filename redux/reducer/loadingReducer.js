import * as ActionTypes from '../actionTypes';

const initialNoteState = null;

export default function loadingReducer(state = {isLogin: initialNoteState}, action) {
  switch (action.type) {
    case ActionTypes.SHOW_LOADING: 
      return action.payload
    case ActionTypes.HIDE_LOADING: 
      return action.payload;
    default: 
      return state;
      break;
  }
}