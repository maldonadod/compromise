import React from 'react'
import { connect } from 'react-redux'
import {
  facebook_login
} from './actions'

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(facebook_login(user))
  }
}

export default x => connect(null,mapDispatchToProps)(x)
