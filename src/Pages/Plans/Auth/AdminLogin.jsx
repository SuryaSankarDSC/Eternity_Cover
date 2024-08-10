import React, { useState } from 'react';
import './Login.css';
import { saveToLocalStorage } from './localStorageUtils';

const AdminLogin = ({ navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === 'surya' && password === '12345') {
      saveToLocalStorage('adminLoginData', { username, password });
      alert('Admin login successful!');
      navigate('adminPage'); // Navigate to admin page
    } else {
      setError('Invalid admin username or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Admin Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">Login</button>
          <button type="button" className="toggle-button" onClick={() => navigate('login')}>
            User Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
