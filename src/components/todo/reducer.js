import {
  FETCH_GOALS_SUCCEED
  ,FETCH_GOALS_FAILED
  ,CREATE_GOAL
} from './constants'
const defaultState = {
  goals: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_GOALS_SUCCEED:
      return Object.assign({}, state, action)
      break;
    case CREATE_GOAL:
      let goals = [...state.goals, action.goal]
      return Object.assign({}, state, {
        goals
      })
      break;
    default:
      return state
  }
}

export default reducer
