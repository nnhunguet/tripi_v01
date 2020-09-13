import * as ActionTypes from '../actionTypes';
const initialNoteState = [];
export default function getHotelsReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.GET_HOTELS:
      return action.payload;
    case ActionTypes.GET_HOTELS_SUCCEEDED: 
      console.log({
        ...state,
        ...action.payload,
      })
      return {
        ...state,
        ...action.payload,
      }
    case ActionTypes.SORT_PRICE_ASC:
      console.log('state data', state.data);
      const data = state.data.sort((a,b) => {
        return a.final_amount - b.final_amount; 
      });
      console.log('data', data);
      return {
        ...state,
        data: data
      }
    case ActionTypes.GET_HOTELS_FAILD: 
      return state;  
    default:
      return state;
      break;
  }
}

