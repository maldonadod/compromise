import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
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
        style={{
          marginTop: '20px'
        }}
        fluid={true}
        textAlign="center">
        {
          user === null ?
            <Login />
          :
            (
              <div>
                <Header as="h2">Goals</Header>
                <Todo {...this.state.todo}
                  TodoItem={TodoItem} />
              </div>
            )
        }
      </Container>
    )
  }
}

export default MapUserToProp(Home)
