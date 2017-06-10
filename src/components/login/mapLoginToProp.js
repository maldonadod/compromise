import React from 'react'
import { connect } from 'react-redux'
import {
  login
} from './actions'

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  }
}

export default x => connect(null,mapDispatchToProps)(x)
