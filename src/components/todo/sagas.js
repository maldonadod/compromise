import { call, put, takeLatest } from 'redux-saga/effects'
import {
  FETCH_GOALS_SUCCEED
  ,FETCH_GOALS_FAILED
} from './constants'
import {
  ADD_DAY_ACTION
  ,SUBTRACT_DAY_ACTION
} from '../date-header/constants'

function fetchGoals() {
  return fetch('/goals.json')
    .then(res => res.json())
}

function *handleFetch() {
  try {
      const goals = yield call(fetchGoals);
      yield put({
        type: FETCH_GOALS_SUCCEED,
        goals
      });
   } catch (e) {
      yield put({
        type: FETCH_GOALS_FAILED,
        message: e.message
      });
   }
}

function *watchFetchData() {
  yield takeLatest(ADD_DAY_ACTION, handleFetch)
}

export default watchFetchData
