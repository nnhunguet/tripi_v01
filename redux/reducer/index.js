import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import keyWordReducer from './keyWordReducer';
import getHotelReducer from './getHotelReducer';
import getInforHotelReducer from './getInforHotelReducer';
import loadingReducer from './loadingReducer';
import filterReducer from './filterReducer';

const reducer = combineReducers({
  loginReducer,
  keyWordReducer,
  getHotelReducer,
  getInforHotelReducer,
  loadingReducer,
  filterReducer,
})

export default reducer;