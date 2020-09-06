import * as ActionTypes from '../actionTypes';

const initialNoteState = false;

export default function loginReducer(state = {isLogin: initialNoteState}, action) {
  switch (action.type) {
    case ActionTypes.LOGIN: 
      console.log('Login');
      console.log(action.payload);
      return {
        ...state,
        isLogin: action.payload.isLogin,
        isWrong: action.payload.isWrong,
      }
    case ActionTypes.LOGOUT: 
      console.log('Logout');
      return !state;
    default: 
      return state;
      break;
  }
}