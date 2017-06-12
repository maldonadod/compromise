import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import mapGoalDispatchToProp from '../todo/mapGoalDispatchToProp'
import mapUserToProp from '../login/mapUserToProp'

class GoalInput extends Component {

  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e, t) {
    if (e.keyCode == 13) {
      const title = e.target.value;
      const { user } = this.props;
      e.target.value = "";
      this.props.addGoal({
        title,
        user: user._id
      });
    }
  }

  render() {
    return (
      <Input
        placeholder="Goal"
        type="text"
        fluid
        onKeyDown={this.onKeyDown} />
    )
  }
}

export default mapUserToProp(mapGoalDispatchToProp(GoalInput))
