import {
  FETCH_GOALS_SUCCEED
  ,FETCH_GOALS_FAILED
  ,CREATE_GOAL
  ,UPDATE_GOAL
  ,UPDATE_GOALS_SUCCEED
  ,DELETE_GOALS_SUCCEED
  ,CREATE_GOALS_SUCCEED
  ,DONE_UNDONE_GOAL_SUCCEED
} from './constants'
const defaultState = {
  goals: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_GOALS_SUCCEED:
      return Object.assign({}, state, action)
      break;
    case CREATE_GOALS_SUCCEED:
      let goals = [...state.goals, action.goal]
      return { ...state, goals };
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
    case DELETE_GOALS_SUCCEED:
      const rest_goals = state.goals.filter(g => g._id !== action.goal._id);
      return {...state, ...{goals: rest_goals}}
      break;
    case DONE_UNDONE_GOAL_SUCCEED:
      return Object.assign({}, state, {
        goals: state.goals.map(goal => {
          if (goal._id == action.goal._id) {
            goal = {...goal, ...action.goal}
          }
          return goal;
        })
      })
      return state;
      break;
    default:
      return state
  }
}

export default reducer
