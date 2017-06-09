import React from 'react'
import { connect } from 'react-redux'
import {
  doneGoalAction
  ,undoneGoalAction
} from './actions'

const mapDispatchToProps = (dispatch) => {
  return {
    doneGoal: (goal) => dispatch(doneGoalAction(goal))
    ,undoneGoal: (goal) => dispatch(undoneGoalAction(goal))
  }
}

export default View => connect(null, mapDispatchToProps)(View)
