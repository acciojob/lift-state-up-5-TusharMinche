import React from 'react'

export const LoginForm = ({setIsLoggedIn}) => {
    function handelSubmit() {
    setIsLoggedIn(true);
  }
  return (
    <form>
          <label>Username:</label>
          <input type="text" required></input>
          <label>Password:</label>
          <input type="password" required></input>
          <button onClick={handleSubmit}>Login</button>
        </form>
  )
}
