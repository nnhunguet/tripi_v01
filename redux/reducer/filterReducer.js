import * as ActionTypes from '../actionTypes';

const initialNoteState = {
  price: null,
  star: null,
  overallScore: null,
  service: [],
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
      let curService = [...preService];
      let index = preService.indexOf(action.payload.service);
      if(index === -1) {
        curService.push(action.payload.service)
      } else {
        curService = curService.slice(index, index+1);
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

