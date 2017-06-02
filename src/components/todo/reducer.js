import {
  FETCH_GOALS_SUCCEED
  ,FETCH_GOALS_FAILED
  ,CREATE_GOAL
  ,UPDATE_GOAL
  ,UPDATE_GOALS_SUCCEED
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
    case UPDATE_GOALS_SUCCEED:
      let updated_goals = state.goals.map(goal => {
        if (goal._id == action.goal._id) {
          goal = {...goal, ...action.goal}
        }
        return goal;
      })
      return Object.assign({}, state, {
        goals: updated_goals
      })
      break;
    default:
      return state
  }
}

export default reducer
