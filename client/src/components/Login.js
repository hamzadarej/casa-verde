import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  axios.defaults.withCredentials = true;
  const loginUser = () => {
    axios
      .post("user/login", {
        username,
        password,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="register-container">
      <input
        type="text"
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="choose your username"
      />
      <input
        type="password"
        value={password}
        name="conf-password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="confirm your password"
      />
      <button onClick={loginUser}>Login</button>
      <h4>OR</h4>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
