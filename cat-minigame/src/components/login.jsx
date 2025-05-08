import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("No user is registered!");
      return;
    }

    const [savedUsername, savedPassword] = storedUser.split(":");

    if (username === savedUsername && password === savedPassword) {
      navigate("/game");
    } else {
      alert("Incorrect username or password.");
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        <h2>Log In!</h2>

        <label>
          Username:
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
