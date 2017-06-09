import {
  CREATE_GOAL
  ,FETCH_GOALS_REQUESTED
  ,UPDATE_GOAL
  ,DELETE_GOAL
  ,DONE_UNDONE_GOAL_REQUEST
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

export const doneGoalAction = goal => {
  return {
    type: DONE_UNDONE_GOAL_REQUEST,
    goal
  }
}

export const undoneGoalAction = goal => {
  return {
    type: DONE_UNDONE_GOAL_REQUEST,
    goal
  }
}

export const requestGoalsAction = () => {
  return {
    type: FETCH_GOALS_REQUESTED
  }
}
