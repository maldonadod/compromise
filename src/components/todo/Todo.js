import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

class Todo extends Component {

  render() {
    return (
      <ul>
        {this.props.goals.map((item, index) =>
          <this.props.TodoItem key={index} {...item} />)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    goals: state.todo.goals
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
