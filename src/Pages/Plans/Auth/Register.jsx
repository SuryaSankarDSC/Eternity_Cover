import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Use the same CSS file as Login
import backgroundVideo from '../videos/video1.mp4'; // Same background video

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const formData = { username, email, password };

    try {
      const response = await axios.post('http://localhost:8080/reg', formData);
      console.log('User registered:', response.data);
      alert('Registration successful');
      navigate('/login');
    } catch (error) {
      console.error('There was an error registering the user!', error);
      setError('Registration failed');
    }
  };

  return (
    <div className="login-container"> {/* Use the same container class as Login */}
      <video autoPlay loop muted className="background-video"> {/* Same background video */}
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-box"> {/* Use the same box class as Login */}
        <h1 className="login-title">Eternity Cover Insurance Company</h1>
        <form onSubmit={handleRegister}>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">Register</button> {/* Use the same button class as Login */}
          <button type="button" className="login-button" onClick={() => navigate('/login')}>
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
