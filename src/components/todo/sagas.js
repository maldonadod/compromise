import { call, put, takeLatest, all, fork, select } from 'redux-saga/effects'
import {
  FETCH_GOALS_SUCCEED
  ,FETCH_GOALS_FAILED
  ,CREATE_GOAL
  ,FETCH_GOALS_REQUESTED
  ,UPDATE_GOAL
  ,UPDATE_GOALS_SUCCEED
  ,UPDATE_GOALS_FAILED
  ,DELETE_GOAL
  ,DELETE_GOALS_SUCCEED
  ,DELETE_GOALS_FAILED
  ,CREATE_GOALS_SUCCEED
  ,DONE_UNDONE_GOAL_REQUEST
  ,DONE_UNDONE_GOAL_SUCCEED
} from './constants'
import {
  getDateSelector
} from '../date-header/selector'

function fetchGoals(query) {
  //return fetch(`/goals?created_at=${query.created_at}`)
  return fetch(`http://localhost:8080/goals`)
  .then(res => res.json())
}

function saveGoal(goal) {
  return fetch('http://localhost:8080/goals', {
    method: 'POST',
    body: JSON.stringify( goal ),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
}

function updateGoal(goal) {
  const { _id } = goal;
  return fetch(`http://localhost:8080/goals/${_id}`, {
    method: 'PUT',
    body: JSON.stringify( goal ),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
}

function deleteGoal(goal) {
  const { _id } = goal;
  return fetch(`/goals/${_id}`, {
    method: 'DELETE'
  }).then(res => res.json())
}

function doneUndoneGoal(goal) {
  return updateGoal(goal);
}

function *handleFetch(action) {
  try {

    let date = yield select(getDateSelector);
    const { goals } = yield call(fetchGoals, {
      created_at: date
    });
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

function *handleCreate(action) {
  try {

    let data = Object.assign({}, action.goal, {
      created_at: Date.now()
    });
    const { goal } = yield call(saveGoal, data);

    yield put({
      type: CREATE_GOALS_SUCCEED,
      goal
    });

  } catch (e) {
    console.error(e)
  }
}

function *handleUpdate(action) {
  try {
    const { goal } = action;
    const res = yield call(updateGoal, goal);

    yield put({
      type: UPDATE_GOALS_SUCCEED,
      goal: goal
    });
  } catch (e) {
    yield put({
      type: UPDATE_GOALS_FAILED,
      message: e.message
    });
  }
}

function *handleDelete(action) {
  try {
    const { goal } = action;
    const res = yield call(deleteGoal, goal);

    yield put({
      type: DELETE_GOALS_SUCCEED,
      goal: goal
    });
  } catch (e) {
    yield put({
      type: DELETE_GOALS_FAILED,
      message: e.message
    });
  }
}

function *handleDoneUndone(action) {

  try {
    const res = yield call(doneUndoneGoal, action.goal);

    yield put({
      type: DONE_UNDONE_GOAL_SUCCEED,
      goal: action.goal
    });
  } catch (e) {

  }
}

function *watchFetchData() {
  yield takeLatest(FETCH_GOALS_REQUESTED, handleFetch)
}
function *watchCreateData() {
  yield takeLatest(CREATE_GOAL, handleCreate)
}
function *watchUpdateData() {
  yield takeLatest(UPDATE_GOAL, handleUpdate)
}
function *watchDeleteData() {
  yield takeLatest(DELETE_GOAL, handleDelete)
}
function *watchDoneUndone() {
  yield takeLatest(DONE_UNDONE_GOAL_REQUEST, handleDoneUndone)
}

export default function *root() {
  yield all([
    fork(watchFetchData)
    ,fork(watchCreateData)
    ,fork(watchUpdateData)
    ,fork(watchDeleteData)
    ,fork(watchDoneUndone)
  ]);
}
