import {
  LOGIN_SUCCEED
} from './constants'

export function login(user) {
  return {
    type: LOGIN_SUCCEED,
    user
  }
}
