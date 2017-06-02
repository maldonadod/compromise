import React from 'react'
import { connect } from 'react-redux'
import {
  createGoalAction
  ,updateGoalAction
} from './actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addGoal: (goal) => dispatch(createGoalAction(goal))
    ,updateGoal: (goal) => dispatch(updateGoalAction(goal))
  }
}

export default View => connect(null, mapDispatchToProps)(View)
