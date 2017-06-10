import React from 'react'
import FacebookLogin from 'react-facebook-login'
import mapLoginToProp from './mapLoginToProp'

const Login = ({login}) => (
  <FacebookLogin
    appId="303663380078760"
    fields="name,email,picture"
    callback={login} />
)
export default mapLoginToProp(Login)
