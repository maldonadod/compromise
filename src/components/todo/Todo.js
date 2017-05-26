import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import TodoCreate from './TodoCreate'

class Todo extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.goals.map((item, index) =>
            <this.props.TodoItem key={index} {...item} />)}
        </ul>
        <TodoCreate  />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.todo.goals
  }
}

export default connect(mapStateToProps)(Todo);
