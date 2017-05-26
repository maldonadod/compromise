import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import Input from '../todo-input/Input'

class Todo extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.goals.map((item, index) =>
            <this.props.TodoItem key={index} {...item} />)}
        </ul>
        <Input />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.todo.goals
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
