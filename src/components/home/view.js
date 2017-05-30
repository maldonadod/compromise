import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import DateHeader from '../date-header'
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
      <Container
        style={{marginTop: '40px'}}
        textAlign="center">
        <Header as="h1">Achievements for today</Header>
        <Todo {...this.state.todo}
          TodoItem={TodoItem} />
      </Container>
    )
  }
}

export default Home
