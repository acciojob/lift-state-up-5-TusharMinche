import React from 'react'

export const LoginForm = ({setIsLoggedIn}) => {
    function handelSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }
  return (
    <form onSubmit={handelSubmit}>
          <label>Username:</label>
          <input type="text" required></input>
          <label>Password:</label>
          <input type="password" required></input>
          <input type="submit" value="Submit"></input>
        </form>
  )
}
