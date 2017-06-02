import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import TodoCreate from '../todo/TodoCreate'

class GoalInput extends Component {

  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e, t) {
    if (e.keyCode == 13) {
      const title = e.target.value;
      e.target.value = "";
      this.props.addGoal({
        title
      });
    }
  }

  render() {
    return (
      <Input
        placeholder="Goal"
        type="text"
        fluid
        onKeyDown={this.onKeyDown} />
    )
  }
}

export default TodoCreate(GoalInput)
