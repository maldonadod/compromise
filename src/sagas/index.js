import { all } from 'redux-saga/effects'
import todo from './todo'
import login from './login'

export default function *root() {
  yield all([...todo, ...login]);
}
