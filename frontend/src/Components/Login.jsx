import React, { useState } from 'react';
import { login } from '../API/api';

const Login = () => {
  const [username, setUsername] = useState(''); // Initialize username state
  const [password, setPassword] = useState(''); // Initialize password state

  const handleSubmit = event => {
    event.preventDefault()
    login(event.target.username, event.target.password)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
