import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    user: state.login.user
  }
}

export default x => connect(mapStateToProps)(x)
