import React, { Component } from 'react'
import { Input, Grid, Checkbox } from 'semantic-ui-react'
import TodoCreate from './TodoCreate'
import DoneUndone from './DoneUndone'

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onKeyDown(e, t) {
    if (e.keyCode == 13) {
      const title = e.target.value;
      let goal = { ...this.props.goal, title }
      this.props.updateGoal(goal);
    }
  }

  onDeleteClick() {
    this.props.deleteGoal(this.props.goal);
  }

  render() {
    const { goal } = this.props;
    const { title, status } = this.props.goal;
    const {
      doneGoal
      ,undoneGoal
    } = this.props;

    return (
      <li>
        <Grid verticalAlign='middle'>
          <Grid.Row columns={2}>
            <Grid.Column width={1}>
              <Checkbox checked={status} onChange={(e, element) => {
                goal.status = element.checked;
                element.checked ? doneGoal(goal) : undoneGoal(goal);
              }} />
            </Grid.Column>
            <Grid.Column>
              <Input
                transparent
                fluid
                onKeyDown={this.onKeyDown}
                defaultValue={title} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </li>
    )
  }
}

export default DoneUndone(TodoCreate(TodoItem));
