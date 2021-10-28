import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DataContext } from "./Context";
const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginMessage, setLoginMessage] = useState("");

  const [token, setToken] = useContext(DataContext);
  axios.defaults.withCredentials = true;
  const loginUser = () => {
    axios
      .post("user/login", {
        username,
        password,
      })
      .then((res) => {
        if (!res.data.token) {
          setLoginMessage("token issue try again");
        } else {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("basket", res.data.user.basket);
          setToken(res.data.token);
          setLoginMessage("You are logged in");
          history.push("/");
        }
      })
      .catch((error) => {
        setLoginMessage(error.response.data.message);
      });
  };

  return (
    <div className="login-container">
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
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="confirm your password"
      />
      <button onClick={loginUser}>Login</button>
      <h4>OR</h4>
      <Link to="/register">Register</Link>
      <h2>{loginMessage}</h2>
    </div>
  );
};

export default Login;
