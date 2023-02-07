import React, { useState } from 'react';
import './Login.styles.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="title">Login</h2>
        <div className="input-container">
          <input 
            className="input" 
            type="text" 
            value={username} 
            placeholder="Username" 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="input-container">
          <input 
            className="input" 
            type="password" 
            value={password} 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="button-container">
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
