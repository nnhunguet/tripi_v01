import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import keyWordReducer from './keyWordReducer';

const reducer = combineReducers({
  loginReducer,
  keyWordReducer,
})

export default reducer;