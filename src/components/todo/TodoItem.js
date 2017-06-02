import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import TodoCreate from './TodoCreate'

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e, t) {
    if (e.keyCode == 13) {
      const title = e.target.value;
      let goal = { ...this.props.goal, title }
      this.props.updateGoal(goal);
    }
  }

  render() {
    const { title } = this.props.goal;
    return (
      <li>
        <Input
          autoFocus
          transparent
          fluid
          onKeyDown={this.onKeyDown}
          defaultValue={title} />
      </li>
    )
  }
}

export default TodoCreate(TodoItem);
