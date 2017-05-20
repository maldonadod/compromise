import React, { Component } from 'react'
import Todo from '../todo/Todo'

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
        <Todo {...this.state.todo} />
      </div>
    )
  }
}

export default Home
