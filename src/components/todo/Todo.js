import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Segment, Label } from 'semantic-ui-react'
import TodoItem from './TodoItem'
import TodoCreate from './TodoCreate'

class Todo extends Component {

  render() {
    return (
      <Segment
        textAlign="left">
        <Label attached='top left'>{this.props.date.toDateString()}</Label>
        <List divided relaxed>
          {this.props.goals.map((item, index) =>
            <List.Item key={index}><this.props.TodoItem {...item} /></List.Item>)}
        </List>
        <TodoCreate date={this.props.date} />
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.todo.goals,
    date: state.date_header.date
  }
}

export default connect(mapStateToProps)(Todo);
