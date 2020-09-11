import { Api }  from './ApiKeyWord';
import { FETCH_FAILD, FETCH_SUCCEEDED, FETCH_KEYWORD } from '../redux/actionTypes';

import { put, takeLatest, delay } from 'redux-saga/effects';
import { showLoading, hideLoading } from '../redux/actions';

function* fetchKeyWord({payload}) {
  yield delay(500);
  console.log('fetch key word', payload);
  try {
    yield put(showLoading());
    const receivedKeyWord = yield Api.getKeyWordSuggestion(payload.keyword);
    yield put(hideLoading());
    if(payload.keyword !== '') {
      yield put({ type: FETCH_SUCCEEDED, payload: { data: receivedKeyWord } });  
    } else {
      yield put({ type: FETCH_FAILD, err });
    }
  } 
  catch(err) {
    console.log('err');
    yield put({ type: FETCH_FAILD, err });
  }
}

export function *watchFetchKeyWord() {
  yield takeLatest(FETCH_KEYWORD, fetchKeyWord);
}