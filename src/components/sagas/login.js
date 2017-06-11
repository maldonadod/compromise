import { call, put, takeLatest, all, fork, select } from 'redux-saga/effects'
import {
  FACEBOOK_LOGIN_SUCCEED
  ,LOGIN_SUCCEED
  ,LOGIN_FAILED
} from '../login/constants'
import {
  login
} from '../login/actions'

function loginToServer(user) {
  const data = {
    data: {
      facebook_id: user.id,
      email: user.email,
      name: user.name,
      picture: {
        url: user.picture.data.url
      }
    }
  }
  return fetch('http://localhost:8080/auth', {
    method: 'POST',
    body: JSON.stringify( data ),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())
}

function *handleIncomingUserData(action) {
  try {
    const user = yield call(loginToServer, action.user);
    yield put(login(user))
  } catch (e) {
    put({
      type: LOGIN_FAILED,
      message: e.message
    })
  }
}

function *watchLogin(action) {
  yield takeLatest(FACEBOOK_LOGIN_SUCCEED, handleIncomingUserData)
}

const root = [
  fork(watchLogin)
];

export default root
