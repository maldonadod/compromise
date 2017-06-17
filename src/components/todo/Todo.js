import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  List
  ,Segment
  ,Label
  ,Icon
  ,Grid
} from 'semantic-ui-react'
import TodoItem from './TodoItem'

import {
  requestGoalsAction
} from './actions'

class Todo extends Component {

  componentDidMount() {
    this.props.fetchGoals();
  }

  renderGoals(goals) {
    return (
      goals.map((item, index) => {
        return <List.Item key={item._id}><this.props.TodoItem goal={item} /></List.Item>
      })
    )
  }

  render() {
    const date = new Date(this.props.date);
    const { goals } = this.props;
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Segment
            textAlign="left">
            <Label as='a' color='teal' ribbon>{date.toDateString()}</Label>
            <List divided relaxed>
              {this.renderGoals(goals)}
              <List.Item key="create_goal"><this.props.TodoItem goal={{}} /></List.Item>
            </List>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.todo.goals,
    date: state.date_header.date
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGoals: () => dispatch(requestGoalsAction())
  }
}

export default connect(
  mapStateToProps
  ,mapDispatchToProps)(Todo);
