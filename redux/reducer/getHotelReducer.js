import * as ActionTypes from "../actionTypes";
const initialNoteState = {};
export default function getHotelsReducer(state = initialNoteState, action) {
  switch (action.type) {
    case ActionTypes.GET_HOTELS_SUCCEEDED:
      return action.payload;
    case ActionTypes.SORT_PRICE_ASC:
      console.log("state data", state.data);
      console.log('sort price');
      const newData = [...state.data] 

      const oldData = newData.sort((a, b) => {
        return a.minPrice.minPrice - b.minPrice.minPrice;
      }); 

      return {data: oldData};
    case ActionTypes.GET_HOTELS_FAILD:
      console.log('getfail');
      return state;
    default:
      return state;
      break;
  }
}
