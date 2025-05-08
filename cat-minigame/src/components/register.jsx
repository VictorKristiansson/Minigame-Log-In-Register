import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      alert("Password must contain a special character.");
      return;
    }
    
    // Store the username and password in localStorage
    localStorage.setItem('user', username + ':' + password);
    
    // Navigate to login page
    navigate('/login');
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <h2>Register!</h2>

        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
        </label>

        <br />

        <label>
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </label>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
