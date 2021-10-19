import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = () => {
    const data = new FormData();
    data.append('username', username);
    data.append('password', username);
    data.append('confPassword', username);
    data.append('avatar', username);

    axios
      .post('http://localhost:5000/register', data, {
        header: {
          'Content-Type': 'multitpart/form-data',
        },
      })
      .then((res) => console.log(res));
  };

  const handleUpload = (e) => {
    setAvatar(e.target.files[0]);
  };
  return (
    <div className="register-container">
      <h2>Ready to take a free trial?</h2>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        adipisci ipsa ratione provident eos, odio doloribus voluptates deleniti
        aperiam harum!
      </h4>
      <input
        type="text"
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="choose your username"
      />
      <input
        type="email"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your email"
      />
      <input
        type="password"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <input
        type="password"
        value={confPassword}
        name="conf-password"
        onChange={(e) => setConfPassword(e.target.value)}
        placeholder="confirm your password"
      />
      <input
        type="file"
        value={avatar}
        name="avatar"
        onChange={handleUpload}
        placeholder=""
      />
      <button onClick={handleSubmit}>Register</button>
      <h4>OR</h4>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;