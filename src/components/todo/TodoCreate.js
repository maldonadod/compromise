import React from 'react'
import { connect } from 'react-redux'
import {
  createGoalAction
} from './actions'
import Input from '../todo-input/Input'

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
      <Input onKeyDown={this.createGoal} />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addGoal: (goal) => dispatch(createGoalAction(goal))
  }
}

export default connect(null, mapDispatchToProps)(TodoCreate)
