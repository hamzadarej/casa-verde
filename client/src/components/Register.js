import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  border: none;
  border-bottom: 2px solid green;
  margin: 2% auto;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [avatar, setAvatar] = useState("");
  axios.defaults.withCredentials = true;
  const handleSubmit = () => {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    data.append("passwordConf", passwordConf);
    data.append("email", email);
    data?.append("avatar", avatar);

    axios
      .post("user/register", data, {
        header: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res.data));
  };

  const handleUpload = (e) => {
    setAvatar(e.target.files[0]);
  };
  // i used useHistory to redirect after registering to the login page
  let history = useHistory();
  const redirect = () => {
    history.push("/login");
  };
  return (
    <div className="register-container">
      <h2>Ready to take a free trial?</h2>

      <Input
        type="text"
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="choose your username"
      />
      <Input
        type="email"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your email"
      />
      <Input
        type="password"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <Input
        type="password"
        value={passwordConf}
        name="conf-password"
        onChange={(e) => setPasswordConf(e.target.value)}
        placeholder="confirm your password"
      />
      <Input type="file" name="avatar" onChange={handleUpload} placeholder="" />
      <button
        onClick={() => {
          handleSubmit();
          redirect();
        }}
      >
        Register
      </button>
      <h4>OR</h4>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
