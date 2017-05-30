import React from 'react'
import { connect } from 'react-redux'
import {
  createGoalAction
} from './actions'
import GoalInput from '../todo-input/GoalInput'

class TodoCreate extends React.Component {

  constructor(props) {
    super(props);
    this.createGoal = this.createGoal.bind(this);
  }

  createGoal(e) {
    if (e.keyCode == 13) {
      const goal = e.target.value;
      this.props.addGoal(goal)
      e.target.value = '';
    }
  }

  render() {
    return (
      <GoalInput
        onKeyDown={this.createGoal}
        disabled={new Date(this.props.date).setHours(0,0,0,0) < new Date().setHours(0,0,0,0)} />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addGoal: (goal) => dispatch(createGoalAction(goal))
  }
}

export default connect(null, mapDispatchToProps)(TodoCreate)
