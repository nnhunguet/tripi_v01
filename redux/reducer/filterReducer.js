import * as ActionTypes from '../actionTypes';

const initialNoteState = {
  price: null,
  star: null,
  overallScore: null,
  service: null,
};

export default function filterReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.PRICE_ONE_NIGTH: 
      return {
        ...initialNoteState,
        price: action.payload.price,
      };
    case ActionTypes.STAR_HOTEL: 
      return {
        ...initialNoteState,
        star: action.payload.star,
      };
    case ActionTypes.OVERALL_SCORE: 
      return {
        ...initialNoteState,
        overallScore: action.payload.score,
      };
    case ActionTypes.SERVICE_HOTEL: 
      return {
        ...initialNoteState,
        service: action.payload.service,
      };    

    default:
      return state;
      break;
  }
}

