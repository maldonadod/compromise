import React, { Component } from 'react'
import { Input, Grid, Checkbox } from 'semantic-ui-react'
import mapGoalDispatchToProp from './mapGoalDispatchToProp'
import DoneUndone from './DoneUndone'

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onKeyDown(e, t) {
    if (e.keyCode == 13) {
      const {
        updateGoal,
        addGoal
      } = this.props;
      const title = e.target.value;
      let goal = { ...this.props.goal, title }
      if (goal._id) { updateGoal(goal) }
      else {
        addGoal(goal);
        e.target.value = "";
      }
    }
  }

  onDeleteClick() {
    this.props.deleteGoal(this.props.goal);
  }

  renderCheckbox(goal) {
    if (!goal._id) { return; }
    const { status } = this.props.goal;
    const {
      doneGoal
      ,undoneGoal
    } = this.props;
    return (
      <Grid.Column width={1}>
        <Checkbox checked={status} onChange={(e, element) => {
          goal.status = element.checked;
          element.checked ? doneGoal(goal) : undoneGoal(goal);
        }} />
      </Grid.Column>
    )
  }

  render() {
    const {
      goal
    } = this.props;
    const { title } = goal;
    return (
      <li>
        <Grid>
          {this.renderCheckbox(goal)}
          <Grid.Column width={14}>
            <Input
              autoFocus={this.props.autoFocus}
              transparent
              fluid
              onKeyDown={this.onKeyDown}
              defaultValue={title} />
          </Grid.Column>
        </Grid>
      </li>
    )
  }
}

export default DoneUndone(mapGoalDispatchToProp(TodoItem));
