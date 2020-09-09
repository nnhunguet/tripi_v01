import * as ActionTypes from '../actionTypes';
import { account } from '../../constants';

export const login = (accountInput) => {
  if(accountInput.name === account.name && accountInput.password === account.password) {
    return {
      type: ActionTypes.LOGIN,
      payload: {
        isLogin: true,
      },
    };
  } else {
    return {
      type: ActionTypes.LOGIN,
      payload: {
        isLogin: false,
        isWrong: true,
      },
    }; 
  }
}

export const logout = () => {
  return {
    type: ActionTypes.LOGOUT,
    payload: {
      id,
    },
  };
}

export const keyWordSuggestion = (keyword) => {
  return {
    type: ActionTypes.FETCH_KEYWORD,
    payload: {
      keyword,
    }
  }
}

export const fetchSuccessAction = (receivedKeyword) => {
  return {
    type: ActionTypes.FETCH_SUCCEEDED,
    payload: {
      receivedKeyword,
    }
  }
}

export const fetchFaildAction = (error) => {
  return {
    type: ActionTypes.FETCH_FAILD,
    payload: {
      error,
    }
  }
}

export const getHotels = (hotel) => {
  return {
    type: ActionTypes.GET_HOTELS,
    payload: {
      hotel,
    }
  }
}

export const getHotelSuccessAction = (data) => {
  return {
    type: ActionTypes.GET_HOTELS_SUCCEEDED,
    payload: {
      data,
    }
  }
}

export const getHotelFaildAction = (error) => {
  return {
    type: ActionTypes.GET_HOTELS_FAILD,
    payload: {
      error,
    }
  }
}

export const getInforHotel = (hotel_id) => {
  return {
    type: ActionTypes.GET_INFOR_HOTEL,
    payload: {
      hotel_id,
    }
  }
}

export const getInforHotelSuccessAction = (hotel) => {
  return {
    type: ActionTypes.GET_INFOR_HOTEL_SUCCEEDED,
    payload: {
      hotel,
    }
  }
}

export const getInforHotelFaildAction = (error) => {
  return {
    type: ActionTypes.GET_INFOR_HOTEL_FAILD,
    payload: {
      error,
    }
  }
}

export const showLoading = () => {
  return {
    type: ActionTypes.SHOW_LOADING,
    payload: {
      status: true,
    }
  }
}

export const hideLoading = () => {
  return {
    type: ActionTypes.HIDE_LOADING,
    payload: {
      status: false,
    }
  }
}

export const priceOneNight = (price) => {
  return {
    type: ActionTypes.PRICE_ONE_NIGTH,
    payload: {
      price,
    }
  }
}

export const starHotel = (star) => {
  return {
    type: ActionTypes.PRICE_ONE_NIGTH,
    payload: {
      star,
    }
  }
}

export const overallScore = (score) => {
  return {
    type: ActionTypes.PRICE_ONE_NIGTH,
    payload: {
      score,
    }
  }
}

export const serViceHotel = (service) => {
  return {
    type: ActionTypes.SERVICE_HOTEL,
    payload: {
      service
    }
  }
}

export const Apply = () => {
  return {
    type: ActionTypes.APPLY,
    payload: {
      apply: true
    }
  }
}
