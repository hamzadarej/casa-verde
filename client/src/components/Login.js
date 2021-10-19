<<<<<<< HEAD
import React from 'react';

const Login = () => {
  return <div>This is the login page</div>;
=======
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  border: none;
  border-bottom: 2px solid green;
  margin: 1% auto;
`;
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    axios
      .post('http://localhost:5000/login', {
        username,
        password,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="register-container">
      <Input
        type="text"
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="choose your username"
      />
      <Input
        type="password"
        value={password}
        name="conf-password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="confirm your password"
      />
      <button onClick={loginUser}>Register</button>
      <h4>OR</h4>
      <Link to="/Register">Register</Link>
    </div>
  );
>>>>>>> 949613dcc830da22942590b8943d57589112145f
};

export default Login;
