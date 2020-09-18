import * as ActionTypes from '../actionTypes';

const initialNoteState = {
  star: [],
  service: [],
};

export default function filterReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.STAR_HOTEL: 
      let preStar = state.star;
      let curStar = [...preStar];
      let indexStar = preStar.indexOf(action.payload.star);
      if(indexStar === -1) {
        curStar.push(action.payload.star)
      } else {
        curStar = curStar.slice(0, indexStar).concat(curStar.slice(indexStar+1));
      }
      console.log(curStar);
      return {
        ...state,
        star: curStar,
      };
    case ActionTypes.SERVICE_HOTEL:
      let preService = state.service;
      let curService = [...preService];
      let index = preService.indexOf(action.payload.service);
      if(index === -1) {
        curService.push(action.payload.service)
      } else {
        curService = curService.slice(0, index).concat(curService.slice(index+1));
      }
      console.log(curService);
      return {
        ...state,
        service: curService,
      };    
    default:
      return state;
      break;
  }
}

