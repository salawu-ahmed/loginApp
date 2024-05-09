import React from 'react'

const Login = () => {
  return (
    <div>
      <div><label htmlFor="userName">Username</label><input name="userName" type="text" /></div>
      <div><label htmlFor="password">Password</label><input name="password" type="password" /></div>
    </div>
  )
}

export default Login
