import React from 'react'
import { Input } from 'semantic-ui-react'

const GoalInput = props => (
  <Input
    placeholder="Goal" 
    type="text"
    fluid={true}
    {...props} />
)

export default GoalInput
