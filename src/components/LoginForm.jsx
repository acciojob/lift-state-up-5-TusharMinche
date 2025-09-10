import React from 'react'

export const LoginForm = ({ setIsLoggedIn }) => {
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" required />
      <label>Password:</label>
      <input type="password" required />
      <button type="submit">Login</button>
    </form>
  )
}
