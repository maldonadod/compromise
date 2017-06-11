import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import DateHeader from '../date-header'
import Todo from '../todo/Todo'
import TodoItem from '../todo/TodoItem'
import MapUserToProp from '../login/mapUserToProp'
import Login from '../login/view'

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
    const { user } = this.props;
    return (
      <Container
        style={{marginTop: '40px'}}
        textAlign="center">
        {
          user === null ?
            <Login />
          :
            <Todo {...this.state.todo}
              TodoItem={TodoItem} />
        }
      </Container>
    )
  }
}

export default MapUserToProp(Home)
