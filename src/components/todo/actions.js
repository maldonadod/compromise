import {
  CREATE_GOAL
  ,FETCH_GOALS_REQUESTED
  ,UPDATE_GOAL
  ,DELETE_GOAL
} from './constants'

export const createGoalAction = goal => {
  return {
    type: CREATE_GOAL,
    goal
  }
}

export const updateGoalAction = goal => {
  return {
    type: UPDATE_GOAL,
    goal
  }
}

export const deleteGoalAction = goal => {
  return {
    type: DELETE_GOAL,
    goal
  }
}

export const requestGoalsAction = () => {
  return {
    type: FETCH_GOALS_REQUESTED
  }
}
