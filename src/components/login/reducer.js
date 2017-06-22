import {
  LOGIN_SUCCEED
} from './constants'
const defaultState = {
  user: null
}
export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case LOGIN_SUCCEED:
      return {
        user: action.user
      };
      break;
    default:
      return state;
  }
}
