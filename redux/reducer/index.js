import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import keyWordReducer from './keyWordReducer';
import getHotel from './getHotelReducer';
import getInforHotel from './getInforHotelReducer';

const reducer = combineReducers({
  loginReducer,
  keyWordReducer,
  getHotel,
  getInforHotel,
})

export default reducer;