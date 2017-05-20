import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todo extends Component {

  render() {
    return (
      <ul>
        {this.props.list.map((item, index) =>
          <this.props.TodoItem key={index} {...item} />)}
      </ul>
    )
  }
}

export default Todo;
