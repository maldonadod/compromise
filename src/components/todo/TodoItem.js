import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import TodoCreate from './TodoCreate'

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
    const { title } = this.props.goal;
    return (
      <li>
        <Input
          transparent
          fluid
          onKeyDown={this.onKeyDown}
          action={{ icon: 'remove', size: 'small', onClick: this.onDeleteClick, color: 'red' }}
          defaultValue={title} />
      </li>
    )
  }
}

export default TodoCreate(TodoItem);
