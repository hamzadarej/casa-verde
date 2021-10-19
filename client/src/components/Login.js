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
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const loginUser = (e) => {
  //   e.prevent.default();
  //   setUsername(e.target.value);
  //   setPassword(e.target.value);
  //   // axios
  //   //   .post('http://localhost:5000/login', {
  //   //     username,
  //   //     password,
  //   //   })
  //   //   .then((res) => console.log(res));
  // };

  return (
    // <h1>Login</h1>
    <div className="register-container">
      <form>
      <Input
        type="text"
        // value={username}
        name="username"
        // onChange={(e) => setUsername(e.target.value)}
        placeholder="choose your username"
      />
      <Input
        type="password"
        // value={password}
        name="conf-password"
        // onChange={(e) => setPassword(e.target.value)}
        placeholder="confirm your password"
      />
      <input type="submit" value="Login" />
      {/* <button onSubmit={loginUser}>Login</button> */}
      <h4>OR</h4>
      <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default Login;
