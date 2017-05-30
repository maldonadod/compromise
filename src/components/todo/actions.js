import {
  CREATE_GOAL
  ,FETCH_GOALS_REQUESTED
} from './constants'

export const createGoalAction = title => {
  return {
    type: CREATE_GOAL,
    goal: {
      title: title
    }
  }
}

export const requestGoalsAction = () => {
  return {
    type: FETCH_GOALS_REQUESTED
  }
}
