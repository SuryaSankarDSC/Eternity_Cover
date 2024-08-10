import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { saveToLocalStorage } from './localStorageUtils';
import backgroundVideo from '../videos/video1.mp4';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (isAdminLogin) {
      if (username === 'surya' && password === '12345') {
        saveToLocalStorage('adminLoginData', { username, password });
        alert('Admin login successful!');
        navigate('/adminPage');
      } else {
        setError('Invalid admin username or password.');
      }
    } else {
      try {
        const response = await axios.post('http://localhost:8080/login', {
          username,
          password,
        });
        console.log('User login response:', response.data);
        saveToLocalStorage('loginData', response.data);
        alert('User login successful!');
        navigate('/'); // Use navigate to redirect to the plans page
      } catch (error) {
        console.error('There was an error logging in the user!', error);
        setError('Invalid username or password.');
      }
    }
  };

  return (
    <div className="login-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-box">
        <h1 className="login-title">Eternity Cover Insurance Company</h1>
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
          <button type="button" className="login-button" onClick={() => navigate('/register')}>
            Register
          </button>
          <button type="button" className="admin-login-toggle" onClick={() => setIsAdminLogin(!isAdminLogin)}>
            {isAdminLogin ? 'User Login' : 'Admin Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
