import {
  FETCH_GOALS_SUCCEED
  ,FETCH_GOALS_FAILED
} from './constants'
const defaultState = {
  goals: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_GOALS_SUCCEED:
      return Object.assign({}, state, action)
      break;
    default:
      return state
  }
}

export default reducer
