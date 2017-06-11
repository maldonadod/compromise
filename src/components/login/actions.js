import {
  LOGIN_SUCCEED
  ,FACEBOOK_LOGIN_SUCCEED
} from './constants'

export function login(user) {
  return {
    type: LOGIN_SUCCEED,
    user
  }
}
export function facebook_login(user) {
  return {
    type: FACEBOOK_LOGIN_SUCCEED,
    user
  }
}
