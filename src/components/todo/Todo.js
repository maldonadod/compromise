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
import mapSetDate from '../date/mapSetDate'
import DayPicker from 'react-day-picker'

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
        <Grid.Column width={4}>
          <DayPicker onDayClick={this.props.setDate} />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment
            textAlign="left">
            <Label as='a' color='teal' ribbon>{date.toDateString()}</Label>
            <List divided relaxed>
              {this.renderGoals(goals)}
              <List.Item key="create_goal"><this.props.TodoItem goal={{}} autoFocus /></List.Item>
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
    date: state.date.date
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGoals: () => dispatch(requestGoalsAction())
  }
}

export default mapSetDate(connect(
  mapStateToProps
  ,mapDispatchToProps)(Todo));
