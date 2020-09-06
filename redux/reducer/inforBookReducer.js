import * as ActionTypes from '../actionTypes';

const initialNoteState = {
  checkin_date_id: Date.now(),
  checkout_date_id: Date.now(),
};

export default function inforBookReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.BOOK_TIME:
      console.log('BookTime');
      return action.payload;
    default:
      return state;
      break;
  }
}