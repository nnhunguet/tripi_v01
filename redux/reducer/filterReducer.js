import * as ActionTypes from '../actionTypes';

const initialNoteState = {
  price: null,
  star: null,
  overallScore: null,
  service: null,
  apply: false,
};

export default function filterReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.PRICE_ONE_NIGTH: 
      return {
        ...initialNoteState,
        price: action.payload.price,
      };
    case ActionTypes.STAR_HOTEL: 
      console.log(action.payload.star);
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
      let preService = state.service;
      let curService;
      if(preService !== null) {
        curService = `${preService}_${action.payload.service}`
      } else {
        curService = `${preService}`;
      }
      console.log(curService);
      return {
        ...initialNoteState,
        service: curService,
      };    
    case ActionTypes.APPLY:
      console.log(action.payload.apply);
      return {
        ...initialNoteState,
        apply: action.payload.apply,
      }
    default:
      return state;
      break;
  }
}

