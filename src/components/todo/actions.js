import {
  CREATE_GOAL
} from './constants'

export const createGoalAction = title => {
  return {
    type: CREATE_GOAL,
    goal: {
      title: title
    }
  }
}
