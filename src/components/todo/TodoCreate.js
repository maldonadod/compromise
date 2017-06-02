import React from 'react'
import { connect } from 'react-redux'
import {
  createGoalAction
  ,updateGoalAction
  ,deleteGoalAction
} from './actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addGoal: (goal) => dispatch(createGoalAction(goal))
    ,updateGoal: (goal) => dispatch(updateGoalAction(goal))
    ,deleteGoal: (goal) => dispatch(deleteGoalAction(goal))
  }
}

export default View => connect(null, mapDispatchToProps)(View)
