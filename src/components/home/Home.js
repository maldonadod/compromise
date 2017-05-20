import React, { Component } from 'react'
import Todo from '../todo/Todo'
import TodoItem from '../todo/TodoItem'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: {
        list: []
      }
    }
  }

  render() {
    return (
      <div>
        <h3>Home</h3>
        <Todo {...this.state.todo}
          TodoItem={TodoItem} />
      </div>
    )
  }
}

export default Home
